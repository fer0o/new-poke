import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import SearchBar from './components/SearchBar'
import Favorites, { FavoriteProvider } from './context/Favorites'
import { getPokemonData, getPokemons, searchPokemon } from './lib/api'

function App () {
  const [pokemons, setPokemons] = useState([])
  // pagination
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  // para context
  const [favorites, setFavorites] = useState([])
  //search Pokemon
  const [notFound, setNotFound] = useState(false)
  const [searching, setSearching] = useState(false)
  //useEffect  con datos de Pokemon
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(24, 24 * page)
      // console.log(data.results)
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 24))
    } catch (err) {}
  }
  useEffect(() => {
    if (!searching) {
      fetchPokemons()
    }
  }, [page])
  //useEffect de fetch pokemon
  useEffect(() => {
    fetchPokemons()
  }, [page])

  //useContext
  const updateFavoritePokemons = name => {
    // console.log(name)
    const updated = [...favorites]
    const isFavorite = favorites.indexOf(name)
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1)
    } else {
      updated.push(name)
    }
    setFavorites(updated)
  }
  const onSearch = async pokemon => {
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    setSearching(true)
    const results = await searchPokemon(pokemon)
    if (!results) {
      setNotFound(true)
      setLoading(false)
      return
    } else {
      setPokemons([results])
      setPage(0)
      setTotal(1)
    }
    setLoading(false)
    setSearching(false)
  }
  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <div>
        <Navbar />
        <div>
          <SearchBar onSearch={onSearch} />
          {notFound ? (
            <div className='grid grid-cols-1 text-center mt-20 lg:grid-cols-2 lg:justify-center lg:m-96'>
              <h3 className='text-base lg:text-2xl font-bold'>
                No se encontro el pokemon que buscabas...
              </h3>
              <img
                src='https://media.tenor.com/szFJZKSZrswAAAAd/pikachu-sad.gif'
                alt=''
                className='w-28 h-28 lg:w-52 lg:h-52 m-auto rounded-full p-4'
              />
            </div>
          ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </div>
      </div>
    </FavoriteProvider>
  )
}

export default App

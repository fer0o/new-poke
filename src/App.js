import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import SearchBar from './components/SearchBar'
import { getPokemonData, getPokemons } from './lib/api'

function App () {
  const [pokemons, setPokemons] = useState([])
  // pagination
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const fetchPokemons = async () => {
    try {
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
  //useEffect de fetch pokemon
  useEffect(() => {
    fetchPokemons()
  }, [page])
  //useEffect pagination

  return (
    <div>
      <Navbar />
      <div>
        <SearchBar />
        {loading ? (
          <div>Cargando Pokemones...</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </div>
    </div>
  )
}

export default App

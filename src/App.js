import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import SearchBar from './components/SearchBar'
import { getPokemonData, getPokemons } from './lib/api'

function App () {
  const [pokemons, setPokemons] = useState([])
  //
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons()
      console.log(data.results)
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch (err) {}
  }
  useEffect(() => {
    fetchPokemons()
  }, [])
  return (
    <div>
      <Navbar />
      <div>
        <SearchBar />
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  )
}

export default App

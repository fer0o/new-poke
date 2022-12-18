import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Pokedex from './components/Pokedex'
import SearchBar from './components/SearchBar'
import { getPokemons } from './lib/api'

function App () {
  const [pokemons, setPokemons] = useState([])
  //
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons()
      setPokemons(data.results)
    } catch (err) {}
  }
  useEffect(() => {
    // console.log('inside useEffect')
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

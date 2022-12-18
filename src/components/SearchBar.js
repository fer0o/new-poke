import { useState } from 'react'
import { searchPokemon } from '../lib/api'

const SearchBar = () => {
  // creamos los use state
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState()

  const onChange = e => {
    //console.log(e.target.value)
    setSearch(e.target.value)
  }
  const onClick = async e => {
    const data = await searchPokemon(search)
    console.log(data)
    setPokemon(data)
  }
  return (
    <div className='flex m-auto gap-2 justify-center'>
      <div>
        <input
          placeholder='Buscar pokemon....'
          onChange={onChange}
          className='border-2 border-black rounded-md w-96 p-2 shadow-2xl text-start'
        />
      </div>
      <div>
        <button
          onClick={onClick}
          className='border-2 border-black  rounded-md bg-blue-500 w-36 p-2 shadow-2xl'
        >
          Buscar
        </button>
      </div>
      {/* datos */}
    </div>
  )
}

export default SearchBar

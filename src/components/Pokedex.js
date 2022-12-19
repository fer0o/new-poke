import React from 'react'
import Pokemon from './Pokemon'

const Pokedex = props => {
  const { pokemons } = props
  return (
    <div>
      <div className='flex justify-between m-4 p-2'>
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {pokemons.map((pokemon, idx) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  )
}

export default Pokedex

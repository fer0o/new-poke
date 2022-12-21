import React from 'react'
import Pagination from './Pagination'
import Pokemon from './Pokemon'

const Pokedex = props => {
  const { pokemons, page, setPage, total } = props
  //pagination
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0)
    setPage(nextPage)
  }
  const nextPage = () => {
    const nextPage = Math.min(page + 1, total)
    setPage(nextPage)
  }
  return (
    <div>
      <div className='flex justify-between m-4 p-2'>
        <h1 className='text-3xl font-bold  m-4'>Pokedex</h1>
        <div className='text-3xl font-bold'>
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-8'>
        {pokemons.map((pokemon, idx) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  )
}

export default Pokedex

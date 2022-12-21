import React from 'react'
import Pagination from './Pagination'
import Pokemon from './Pokemon'

const Pokedex = props => {
  const { pokemons, page, setPage, total, loading } = props
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
        <h1 className='lg:text-3xl text-base font-bold   p-4'>Pokedex</h1>
        <div className='lg:text-3xl text-base font-bold'>
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
        </div>
      </div>
      {loading ? (
        <div className='grid grid-cols-1 text-center mt-20 lg:grid-cols-2 lg:justify-center lg:m-96'>
          <h3 className='text-3xl p-4 m-4'>Cargando Pokemones.....</h3>
          <img
            src='https://media.tenor.com/d0GeOMz6_HwAAAAC/pikachu.gif'
            alt=''
            className='w-28 h-28 lg:w-52 lg:h-52 m-auto p-4'
          />
        </div>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-8'>
          {pokemons.map((pokemon, idx) => (
            <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Pokedex

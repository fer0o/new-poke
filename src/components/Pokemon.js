import React, { useContext } from 'react'
import Favorites from '../context/Favorites'

const Pokemon = props => {
  // corazones
  const redHeart = '🧡'
  const blackHeart = '🖤'
  const { pokemon } = props
  const { favoritePokemons, updateFavoritePokemons } = useContext(Favorites)
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart
  //console.log(pokemon)

  //funcion clikc corazon
  const clickHeart = e => {
    e.preventDefault()
    updateFavoritePokemons(pokemon.name)
  }
  return (
    <div>
      {/* container */}
      <div className='grid grid-cols-2 lg:grid-cols-4 border-2 border-black rounded-md shadow-2xl '>
        {/* imagen container */}
        <div className='lg:col-span-1 col-span-2 '>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className='w-40 h-40 mx-auto'
          />
        </div>
        <div className='col-span-3'>
          <div className='flex justify-between m-4 capitalize text-xl '>
            <h1 className='font-bold'>{pokemon.name}</h1>
            <p className='text-gray-500'># {pokemon.id}</p>
          </div>
          <div>
            <div className='flex flex-row justify-between space-x-8 m-4'>
              {pokemon.types.map((type, idx) => (
                <h3
                  key={idx}
                  className='border-2 border-black p-2 mt-4 w-40 text-center bg-cyan-300 rounded-3xl font-bold'
                >
                  {type.type.name}
                </h3>
              ))}
              <button
                className='text-2xl p-1 border-2 rounded-lg m-2 bg-slate-100'
                onClick={clickHeart}
              >
                {heart}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon

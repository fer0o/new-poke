import React from 'react'

const Pokemon = props => {
  const { pokemon } = props
  //console.log(pokemon)
  return (
    <div>
      {/* container */}
      <div className='grid grid-cols-4 border-2 border-black rounded-md shadow-xl '>
        {/* imagen container */}
        <div className=' col-span-1 '>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className='w-32 h-32'
          />
        </div>
        <div className='col-span-3'>
          <div className='flex justify-between m-4 capitalize text-xl'>
            <h1 className='font-bold'>{pokemon.name}</h1>
            <p className='text-gray-500'># {pokemon.id}</p>
          </div>
          <div>
            <div className='flex flex-row justify-between space-x-8 m-4'>
              {pokemon.types.map((type, idx) => (
                <h3
                  key={idx}
                  className='border-2 border-black p-2 w-full text-center bg-cyan-300 rounded-3xl font-bold'
                >
                  {type.type.name}
                </h3>
              ))}
              <h3 className='text-4xl text-red-600'>❤</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon

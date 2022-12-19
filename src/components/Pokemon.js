import React from 'react'

const Pokemon = props => {
  const { pokemon } = props
  //console.log(pokemon)
  return (
    <div>
      <div>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div>
          <div>
            {pokemon.types.map((type, idx) => (
              <div key={idx}>{type.name}</div>
            ))}
          </div>
          <div>❤</div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon

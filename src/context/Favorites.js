import React from 'react'

const Favorites = React.createContext({
  favoritePokemons: [],
  updateFavoritePokemons: id => null
})
export const FavoriteProvider = Favorites.Provider

export default Favorites

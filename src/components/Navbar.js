import { useContext } from 'react'
import Favorites from '../context/Favorites'
const Navbar = () => {
  const { favoritePokemons } = useContext(Favorites)
  console.log(favoritePokemons)
  let imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  return (
    <div>
      <nav className=' h-28 flex flex-row justify-evenly items-center mt-4'>
        <div>
          <a href='/'>
            <img src={imgUrl} alt='' className='w-40' />
          </a>
        </div>
        <div className='text-3xl'>🧡 {favoritePokemons.length}</div>
      </nav>
    </div>
  )
}

export default Navbar

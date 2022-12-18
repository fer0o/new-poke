import React from 'react'

const Navbar = () => {
  let imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  return (
    <div>
      <nav className=' h-28 flex flex-row justify-evenly items-center mt-4'>
        <div>
          <img src={imgUrl} alt='' className='w-40' />
        </div>
        <div>❤</div>
      </nav>
    </div>
  )
}

export default Navbar

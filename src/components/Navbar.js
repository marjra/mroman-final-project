import React from 'react'
import abstracto from '../abstracto.jpg'

 function Navbar() {
  return (
    <nav className='navbar justify-content-center'>
      <div className='nav-center'>
          <img src={abstracto} alt='imagen' className='imagen' />
      </div>
    </nav>
  )
}

export default Navbar;
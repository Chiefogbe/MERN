import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from './assets/react.svg'


const Header = () => {
  return (
    <div className='headerDiv'>
      <Link to='/'>
        <img src={logo} alt=""/>
      </Link>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Buuk'>Books</NavLink>
      </nav>
    </div>
  )
}

export default Header

import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav_menu">
        <li>Shop <hr /></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav_login_cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar

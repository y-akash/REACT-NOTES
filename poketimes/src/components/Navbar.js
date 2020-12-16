import React from 'react';

// if we use <a></a> tag than page reload we dont want that therfore we use Link or NavLink


const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar
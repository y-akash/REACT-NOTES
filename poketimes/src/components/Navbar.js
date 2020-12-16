import React from 'react';
import {Link, NavLink} from 'react-router-dom';

// if we use <a></a> tag than page reload we dont want that therfore we use Link or NavLink
// Link or NavLink dont reload or sends the request to server
// Link and NavLink both work same and 
// react automatically give anchor tag on html page it will not show Link and NavLink tag on the HTML page
// but NavLink add class="active" in anchor tag remaing all are same

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar
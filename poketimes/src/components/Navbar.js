import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
  // here we dont get any property in props
  // if we use withrRouter higherOrder Component than we will get that properties in props which is use on line 27
  console.log("In Navbar ",props);
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

// withRouter is a higherOrder Component
// below wrapping the Navbar with withrRouter higherOrder Component 
// the Navbar component become supercharge component
// using that we can get that few properties in props

export default withRouter(Navbar);
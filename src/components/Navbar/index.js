import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const Navbar = props => {

  const [search, setSearch] = useState(false)

  const submitSearch = e => {
    e.preventDefault();
    alert('Searched!')
  }
  const openSearch = () => {
    setSearch(true)
  }

  const searchClass = search ? 'searchInput active' : 'searchInput';

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
      <div className="search">
        <form className="searchForm" onSubmit={submitSearch}>
        <input type="text" className={searchClass} placeholder="Search" />
        <img onClick={openSearch} className="icon" src={require('../../images/search.png')} alt="Search" />
        </form>
      </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
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
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">Contact Us</a></li>
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
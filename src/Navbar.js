import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <NavLink to="" className="navbar-brand">Noman</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="nav_in" className="nav-link " aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" activeClassName="nav_in" className="nav-link " aria-current="page">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact  to="/faqs" activeClassName="nav_in" className="nav-link " aria-current="page">FAQs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="contact" activeClassName="nav_in" className="nav-link " aria-current="page">Contact Us</NavLink>
        </li>
       
      </ul>
      <form className="d-flex ml-auto search-btn">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
        </>
    )
}
export default Navbar; 
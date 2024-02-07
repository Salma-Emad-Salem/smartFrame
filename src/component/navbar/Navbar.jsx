import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  fixed-top py-4 navbarr">
        <div className="container-fluid">
            <Link className="navbar-brand px-5 logo" to='/' >START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto px-2">
                <NavLink className={`({ isActive }) => (isActive ? 'active' : '') text nav-link`} aria-current="page" to="/about">ABOUT</NavLink>
                <NavLink className="nav-link text " to="/portfolio">PORTFALIO</NavLink>
                <NavLink className="nav-link text " to="/contact">CONTACT</NavLink>
            </div>
            </div>
        </div>
        </nav>

      </>
    )
  }
}

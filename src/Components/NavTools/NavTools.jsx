import React from 'react'

import { NavLink } from 'react-router-dom'


const NavButtons = props => {
    return (
        <nav className="float-right">

            <NavLink activeStyle={{ backgroundColor: 'red', color: 'white' }} className="btn btn-link" to="/login">Login</NavLink>
            <NavLink activeStyle={{ backgroundColor: 'red', color: 'white' }} className="btn btn-link" to="/register">Register</NavLink>

        </nav>
    )
}

export default NavButtons
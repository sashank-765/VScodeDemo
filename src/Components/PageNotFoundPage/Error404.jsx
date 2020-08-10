import React from 'react'
import {Link} from 'react-router-dom'

const Error404 = props => {
    return (
        <>
            <h3>404 : Error Page Not Found</h3>
            <Link to = "/">HomePage!!!</Link>
        </>
    )
}

export default Error404
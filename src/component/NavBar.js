import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
                <Link to="/" className="navbar-brand d-flex align-items-center"><i className="far fa-file-alt"></i>&nbsp;<strong>Invoice Audit</strong></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    )
}

export default NavBar

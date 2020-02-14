import React from 'react'
import { Link } from "react-router-dom"

const NavBarHeader = () => {
    return (
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">CPI Invoice Web App</h4>
                        <p className="text-muted">
                            Lorem ipsum bla bla bla
                        </p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/signin" className="text-white">Sign In</Link></li>
                            <li><Link to="/signup" className="text-white">Sign Up</Link></li>
                            <li><Link to="/contact" className="text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarHeader

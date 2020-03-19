import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="py-5 text-muted">
            <div className="container">
                <p className="float-right">
                    <Link to="#">Back to top</Link>
                </p>
                <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap? <Link to="/">Visit the homepage</Link> or read our <Link to="/">getting started guide</Link>.</p>
            </div>
        </footer>
    )
}

export default Footer

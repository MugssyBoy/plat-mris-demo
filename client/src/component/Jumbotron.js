import React from 'react'
import { Link } from "react-router-dom"

const Jumbotron = () => {
    return (
        <section className="jumbotron bg-light text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Invoice Audit</h1>
                <p className="lead text-muted">Something relevent description here.... chu chu chu chu</p>
                <p>
                    <Link to="/invoice-parser" className="btn btn-primary my-2">Invoice Parsers</Link>&nbsp;
                    <Link to="/oc-parser" className="btn btn-secondary my-2">OC Parsers</Link>
                </p>
            </div>
        </section>
    )
}

export default Jumbotron

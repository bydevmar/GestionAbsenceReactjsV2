import React, { Component } from 'react'

export class Head extends Component {
    render() {
        return (
            <div classNameNameName="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link" href="/home">Gestion D'absence</a></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/rates">Rates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/help">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Head

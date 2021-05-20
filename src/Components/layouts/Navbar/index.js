
import { Link, Redirect } from 'react-router-dom';
import React from 'react'
import Cookies from 'js-cookie';
import {useSelector,useDispatch} from "react-redux"
import {signOffAction} from "../../../actions/authActions"

export default function Navbar() {
    const dispatch = useDispatch()
    const logOut = () => {
        Cookies.remove('logged')
        dispatch(signOffAction())
        return <Redirect to="login"/>
    }
    const islogged = useSelector(state => state.auth.isLogged)

    return (
        <div>
            <div>
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link">
                                            Gestion Absence
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav mx-auto">
                                    <li className="nav-item"></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/services' className="nav-link">
                                            SERVICES
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link">
                                            HELP
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={islogged ? "" : "/login"}>
                                            {islogged ? "" : "LOGIN"}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">
                                            {islogged ? "DASHBOARD" : ""}
                                        </Link>
                                    </li>
                                    <li className="nav-item" onClick={logOut}>
                                        <Link className="nav-link" to="/login" >
                                            {islogged ? "LOGOUT" : ""}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}



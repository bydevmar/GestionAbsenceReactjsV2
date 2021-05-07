import React, { Component } from 'react'
import "./Login.css"

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <form onsubmit="event.preventDefault()" className="box">
                                    <h1>Login</h1>
                                    <p className="text-muted"> Please enter your login and password!</p>
                                    <input type="text" name="" placeholder="Username"/>
                                    <input type="password" name="" placeholder="Password"/> 
                                    <a className="forgot text-muted" href="#">Forgot password?</a> 
                                    <input type="submit" name="" value="Login" href="#"/>
                                    <div className="col-md-12">
                                        <ul className="social-network social-circle">
                                            <li>
                                                <a href="#" className="icoFacebook" title="Facebook">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="icoTwitter" title="Twitter">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="icoGoogle" title="Google +">
                                                    <i className="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Login

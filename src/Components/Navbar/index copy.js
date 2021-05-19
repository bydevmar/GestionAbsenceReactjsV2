import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';



const Navbar = () => {
    const islogged = useSelector(state => state.auth.islogged)
    return (
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
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link">
                                        Help
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={islogged ? "/home" : "/login"}>
                                        {islogged ? "Home" : "Login"}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={islogged ? "/dashboard" : ""}>
                                        {islogged ? "Dashboard" : ""}
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
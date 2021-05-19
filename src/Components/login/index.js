import React, { useState } from 'react';
import "./Login.css"
import { useDispatch } from "react-redux"
import { signInAction , signOffAction} from "../../actions/authActions"
import LoginForm from './LoginForm';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom"
 
const Login = () => {
    const { fetchUser } = require("./fetchUser");
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    const hadleform = (e) => {
        e.preventDefault();
        fetchUser(userEmail, userPassword)
            .then((result) => {
                if (result.user !== undefined) {
                    dispatch(signInAction(result.user))
                    Cookies.set("logged", true, { expires: 1 / 72 })
                    history.push("/dashboard")
                }
                else {
                    dispatch(signOffAction(result.user))
                }
            })
            .catch((error) => {
                dispatch(signOffAction( error.user ))
            })
    }
    const onChangeEmail = e => {
        setUserEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setUserPassword(e.target.value)
    }

    if (Boolean(Cookies.get("logged"))) return <Redirect to="/dashboard" />
    return (
        <div>
            <LoginForm
                onChangePassword={onChangePassword}
                onChangeEmail={onChangeEmail}
                hadleform={hadleform}
                userEmail={userEmail}
                userPassword={userPassword}
            />
        </div>
    );
}

export default Login;


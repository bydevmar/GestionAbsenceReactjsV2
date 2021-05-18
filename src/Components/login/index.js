import React, { useState } from 'react';
import "./Login.css"
import { useDispatch} from "react-redux"
import { signinAction } from "../../actions/sign_in.action"
import LoginForm from './LoginForm';
const { fetchUser } = require("./fetchUser");

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch()

    const hadleform = async (e) => {
        e.preventDefault();
        fetchUser(userEmail, userPassword)
            .then((result) => {

                if (result.user !== undefined) {
                    dispatch(signinAction(result.user))
                }
            })
            .catch((error) => {
                dispatch(signinAction(error.user))
            })
    }
    const onChangeEmail = e => {
        setUserEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setUserPassword(e.target.value)
    }

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


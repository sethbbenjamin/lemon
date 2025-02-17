import "./login.css"
import React from 'react'

export const Login = () => {
    return (
        <form action="" id="login-form">  
            <label htmlFor="user">Username:</label>
            <input type="text" name="user" />

            <label htmlFor="pass">Password:</label>
            <input type="password" name="pass" />
            <input type="button" value="Login" />

        </form>
    )
}

export default Login;

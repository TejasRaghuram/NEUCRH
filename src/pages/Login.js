import React from 'react';
import Logo from './udon.png';
import './styles.css'; // Ensure this path is correct

const Login = () => {
    const handleCreateAccount = () => {
        alert('Redirecting to create account page...');
    };

    return (
        <div>
            <img id="logo" src={Logo} alt="Logo" />
            <form>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter your username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter your password" name="psw" required />

                    <div className="button-container">
                        <button type="submit" className="login-button"><b>Login</b></button>
                        <button type="button" className="create-account-button" onClick={handleCreateAccount}>
                            <b>Create Account</b>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;

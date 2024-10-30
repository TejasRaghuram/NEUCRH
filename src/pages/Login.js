import Logo from './../styles/Logo.png';
import './../styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <div id="login-bg"/>
            <img id="login-logo" src={Logo} alt="Logo" />
            <form>
                <div id="login-container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input class="login-input" type="text" placeholder="Enter your username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input class="login-input" type="password" placeholder="Enter your password" name="psw" required />

                    <div className="button-container">
                        <button type="submit" className="login-button"><b>Login</b></button>
                        <button type="button" className="create-account-button" onClick={() => {navigate('/signup')}}>
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
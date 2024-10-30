import Logo from '../styles/Logo.png';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function Login() {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    return (
        <div>
            <div id="login-bg"/>
            <img id="login-logo" src={Logo} alt="Logo" />
            <form>
                <div id="login-container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input id="login-username" class="login-input" type="text" placeholder="Enter your username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input id="login-password" class="login-input" type="password" placeholder="Enter your password" name="psw" required />

                    <div className="button-container">
                        <button type="submit" className="login-button" onClick={async (event) => {
                            event.preventDefault();
                            const username = document.getElementById("login-username").value;
                            const password = document.getElementById("login-password").value;
                            const response = await fetch('http://localhost:4000/api/routes/verify', {
                                method: 'post',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({username, password})
                            });
                            if(response.ok)
                            {
                                user.setUsername(username);
                                navigate('/');
                            }
                            else
                            {
                                const json = await response.json();
                                alert(json['error']);
                            }
                        }}>Login</button>
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
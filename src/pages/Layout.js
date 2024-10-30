import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from './../styles/Logo.png';
import './../styles/Layout.css';

function Layout() {
    const navigate = useNavigate();
    return (
        <div>
            <div id="navbar">
                <img id="logo" src={Logo} alt=""/>
                <button class="nav-link" onClick={() => {navigate('/')}}>Donate</button>
                <button class="nav-link" onClick={() => {navigate('/receive')}}>Receive</button>
                <button id="nav-logout" onClick={() => {navigate('/login')}}>Log Out</button>
            </div>
            <div id="space"/>
            <Outlet/>
            <p id="footer">Designed and Developed by Dev Chechi, Mahiya Patil, and Tejas Raghuram.</p>
        </div>
    );
}

export default Layout;
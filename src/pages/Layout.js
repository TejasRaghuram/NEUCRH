import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <p></p>
            <Outlet/>
            <p></p>
        </div>
    );
}

export default Layout;
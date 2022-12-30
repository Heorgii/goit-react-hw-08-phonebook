import { NavLink } from "react-router-dom";

const NavAuth = () => {
    return (
        <div>
            <NavLink  to="/register">
                Register
            </NavLink>
            <NavLink to="/login">
                Log In
            </NavLink>
        </div>


    );
}

export default NavAuth;
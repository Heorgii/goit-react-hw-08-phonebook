import { NavLink } from "react-router-dom";

const NavAuth = () => {
    return (
        <div>
            {/* //     <Link>
        //         Register
        //     </Link>

        //     <Link>
        //         Log In
        //     </Link > */}
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
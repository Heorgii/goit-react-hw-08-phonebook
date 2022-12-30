import Navigation from "components/Navigation/Navigation";
import NavAuth from "components/NavAuth/NavAuth";
import UserMenu from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";


const AppBar = () => {
    const {isLoggedIn} = useAuth();

    return (
        <header>
            {/* <UserMenu /> */}
            {/* < NavAuth/> */}
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <NavAuth />}
        </header>
    );
}

export default AppBar;
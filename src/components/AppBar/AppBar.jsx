import Navigation from "components/Navigation/Navigation";
import { useAuth } from "hooks/useAuth";


const AppBar = () => {
    const {isLoggedIn} = useAuth();
    
    return (
        <header>
            <Navigation />
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </header>
    );
}

export default AppBar;
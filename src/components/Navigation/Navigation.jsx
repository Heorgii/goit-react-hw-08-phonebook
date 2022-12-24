import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.navBoox}>
            <NavLink to="/" className={css.link} >
                Home
            </NavLink>

            {isLoggedIn && (
                <NavLink to="/contacts" className={css.link} >
                    Contacts
                </NavLink>
            )}

        </nav>
    );
}

export default Navigation;
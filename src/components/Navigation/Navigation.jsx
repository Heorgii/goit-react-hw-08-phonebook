import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={css.navBoox}>
            <NavLink to="/" className={css.link} >
                Home
            </NavLink>

            <NavLink to="login" className={css.link} >
                Log in
            </NavLink>

            <NavLink to="register" className={css.link}>
                Registration
            </NavLink>
        </nav>
    );
}

export default Navigation;
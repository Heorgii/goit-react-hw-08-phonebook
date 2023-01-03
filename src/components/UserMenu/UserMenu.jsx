import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import css from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.user_box}>
            <p className={css.user_name}>Welcome, {user.name}</p>
            <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
}

export default UserMenu;
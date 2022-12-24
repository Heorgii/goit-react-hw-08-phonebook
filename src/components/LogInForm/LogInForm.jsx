import { useDispatch } from 'react-redux';
import css from './LogInForm.module.css';

const LogInForm = () => {

    const dispatch = useDispatch();

    return (
        <div className={css.log_in__form}>
            <h2 className={css.title}>Log in</h2>

            <form className={css.form}>
                <label className={css.labele}>
                    <input className={css.input} type="email" name="email" placeholder="Email" />
                </label>

                <label className={css.labele}>
                    <input className={css.input} type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit" className={css.button} >Log in</button>
            </form>
        </div>
    );
}
export default LogInForm;
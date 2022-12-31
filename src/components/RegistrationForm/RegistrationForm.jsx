import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        const name = form.elements.name;
        const email = form.elements.email;
        const password = form.elements.password;

        const newUser = {
            name: name.value,
            email: email.value,
            password: password.value,
        }

       dispatch(register(newUser));
        form.reset();
    }

    return (
        <div className={css.reg__form}>
            <h2 className={css.title}>Registration</h2>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.labele}>
                    <input className={css.input} type="text" name="name" placeholder="Name"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>

                <label className={css.labele}>
                    <input className={css.input} type="email" name="email" placeholder="Email"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>

                <label className={css.labele}>
                    <input className={css.input} type="password" name="password" placeholder="Password"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>
            </form>

            <button type="submit"  className={css.button}>Sing up</button>

        </div>
    );
}
export default RegistrationForm;
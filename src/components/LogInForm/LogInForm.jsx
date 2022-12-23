import css from './LogInForm.module.css';

const LogInForm = () => {
    return (
        <div className={css.log_in__form}>
            <h2 className={css.title}>Log in</h2>

            <form className={css.form}>
                <label className={css.labele}>
                    <input className={css.input} type="email" placeholder="Email"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label className={css.labele}>
                    <input className={css.input} type="password" placeholder="Password"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>
            </form>

            <button type="submit" className={css.button} >Log in</button>
        </div>
    );
}
export default LogInForm;
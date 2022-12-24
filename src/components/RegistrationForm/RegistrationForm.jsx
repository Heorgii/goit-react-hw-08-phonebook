import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

const RegistrationForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));

        form.reset();
    }
    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" placeholder="Name"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>


                <label>
                    <input type="email" name="email" placeholder="Email"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>

                <label>
                    <input type="password" name="password" placeholder="Password"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </label>
            </form>

            <button type="submit">Sing up</button>

        </div>
    );
}
export default RegistrationForm;
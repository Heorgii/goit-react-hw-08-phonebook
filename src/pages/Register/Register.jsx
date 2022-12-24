import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import { Helmet } from "react-helmet";


export default function LogIn() {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegistrationForm />
        </div>
    );
}

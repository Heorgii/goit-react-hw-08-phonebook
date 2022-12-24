import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>

            <div>
                <h1 >Phonebook</h1>
                <ContactForm />
                <h2 >Contacts</h2>
                <Filter />
                <ContactList />
            </div>
        </>
    );
}
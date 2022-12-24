import { lazy } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from './App.module.css';
const Home = lazy(() => import('../pages/Home/Home'));

const App = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contact_title}>Contacts</h2>
      <Filter />
      <ContactList />
      <Home />
    </div>
  );
};


export default App;
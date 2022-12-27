// import { lazy } from "react";
// import { useDispatch } from "react-redux";
// import { useAuth } from "hooks/useAuth";
// import { useEffect } from "react";
// import { refreshUser } from "redux/auth/operations";
// import { Route, Routes } from "react-router-dom";
// import SharedLayout from "./SharedLayout.jsx";
// import { RestrictedRoute } from "utils/RestrictedRoute.jsx";
// import { PrivateRoute } from "utils/PrivateRoute.jsx";
// import css from './App.module.css';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register/Register'));
// const LoginPage = lazy(() => import('../pages/LogIn/LogIn'));
// const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useAuth();
  // console.log(isRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser())
  // }, [dispatch]);

  return (
    <div>
      <h1 >Phonebook</h1>
      <ContactForm />
      <h2 >Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<SharedLayout />}>
  //         <Route index element={<HomePage />} />
  //         {/* <Route path="/login"
  //           element={
  //             <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
  //           }
  //         />

  //         <Route path="/register "
  //           element={
  //             <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
  //           }
  //         />

  //         <Route path="/contacts "
  //           element={
  //             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
  //           }
  //         /> */}
  //       </Route>
  //     </Routes>
  //   </div>
  // );


};


export default App;
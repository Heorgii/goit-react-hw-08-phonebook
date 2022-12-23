// import LogInForm from "./LogInForm/LogInForm";
import { lazy } from "react";
// import { Route, Routes } from "react-router-dom";

// const AppBar = lazy(() => import('./AppBar/AppBar'));
// const Navigation = lazy(() => import('./Navigation/Navigation'));
const LogInForm = lazy(() => import('./LogInForm/LogInForm'));
const RegistrationForm = lazy(() => import('./RegistrationForm/RegistrationForm'));

const App = () => {
  return (
    <div>
      <LogInForm />
      <RegistrationForm />
    </div>
  );
};


export default App;
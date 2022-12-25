import { lazy } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout.jsx";
import { RestrictedRoute } from "utils/RestrictedRoute.jsx";
// import css from './App.module.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/LogIn/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />

          <Route path="/register "
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }
          />

          <Route path="/contacts "
            element={
              <RestrictedRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};


export default App;
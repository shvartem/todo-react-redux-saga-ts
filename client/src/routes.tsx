import { Switch, Redirect, Route } from 'react-router-dom';
import LoginPage from './modules/AuthPage/LoginPage';
import RegisterPage from './modules/AuthPage/RegisterPage';
// import PrivatRoute from './modules/AuthPage/PrivatRoute';
import MainPage from './modules/MainPage.js/MainPage';

const useRouter = (isAuthenticated: boolean) => (
  <Switch>
    {/* <PrivatRoute condition={isAuthenticated} fallback="/login" path="/home">
      <MainPage />
    </PrivatRoute>
    <PrivatRoute condition={!isAuthenticated} fallback="/home" path="/login" exact>
      <LoginPage />
    </PrivatRoute>
    <PrivatRoute condition={!isAuthenticated} fallback="/home" path="/register" exact>
      <RegisterPage />
    </PrivatRoute> */}

    <Route path="/home">
      <MainPage />
    </Route>
    <Redirect to="/home" />
  </Switch>
);

export default useRouter;

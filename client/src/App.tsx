/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';

const App = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.profile);
  // const isLoading = useSelector((state) => state.user.isLoading);
  // const isAuthenticated = Boolean(user?.id);
  const isLoading: boolean = false;
  const isAuthenticated: boolean = true;
  const routes = useRouter(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(actions.getAllTodosPending());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    dispatch(actions.getInitialUserPending());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <Navbar isAuth={isAuthenticated} />
        <h1>Идёт загрузка, подождите</h1>
      </>
    );
  }

  return (
    <>
      <Navbar isAuth={isAuthenticated} />
      {routes}
    </>
  );
};

export default App;

import { Route, Routes, useLocation } from 'react-router-dom';

import HomePage from '~/presentation/components/pages/home';
import LoginPage from '~/presentation/components/pages/login';

//utils
import { history } from '../../presentation/utils/index';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export const changeRoute = (route: any) => {
  history.push(route);
};

export const isPrivateRoute = () => {
  const location = useLocation();
  const path = location.pathname;
  if (['/login'].indexOf(path) > -1) {
    return false;
  } else {
    return true;
  }
};
export default routes;

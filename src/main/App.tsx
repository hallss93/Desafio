import '../presentation/assets/style/index.scss';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import storeTwoVersion from '~/presentation/store';

import Routes from '../main/routes/routes';
import { history } from '../presentation/utils/index';

const App: React.FC = () => {
  useEffect(() => {
    console.log('history', history.location.pathname);
  }, [history]);

  return (
    <Provider store={storeTwoVersion}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

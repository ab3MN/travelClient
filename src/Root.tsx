import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { store, persistor } from './redux/store';
import MyLoader from './shared/MyLoader/MyLoader';

const Root = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<MyLoader />}>
        <Provider store={store}>
          <PersistGate
            loading={<MyLoader />}
            persistor={persistor}
          ></PersistGate>{' '}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </React.StrictMode>
  );
};

export default Root;

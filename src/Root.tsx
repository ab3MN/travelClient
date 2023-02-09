import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { store, persistor } from './redux/store';

const Root = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Provider store={store}>
          <PersistGate
            loading={<h1>Loading...</h1>}
            persistor={persistor}></PersistGate>{' '}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </React.StrictMode>
  );
};

export default Root;

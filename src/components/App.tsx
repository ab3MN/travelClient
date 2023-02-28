import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { userAuth } from '../redux/users/userServices';
import {
  HomePage,
  DestinationPage,
  ListingPage,
  PagesPage,
  ContactPage,
} from '../routes/routes';

import AppBar from './AppBar';
import Footer from './Footer/Footer';

const App = () => {
  const dispatch = useAppDispatch();
  const { refreshToken } = useAppSelector(s => s.user);

  React.useEffect(() => {
    if (!refreshToken) return;
    dispatch(userAuth({ refreshToken }));
  }, [dispatch, refreshToken]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="/destination" element={<DestinationPage />} />{' '}
        <Route path="/listing" element={<ListingPage />} />{' '}
        <Route path="/pages" element={<PagesPage />} />{' '}
        <Route path="/contact" element={<ContactPage />} />{' '}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

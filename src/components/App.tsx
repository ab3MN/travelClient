import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  LogInPage,
  SignUpPage,
  HomePage,
  DestinationPage,
  ListingPage,
  PagesPage,
  ContactPage,
} from '../routes/routes';

import './App.css';
import AppBar from './AppBar';
import { useAppDispatch } from '../hooks/reduxHooks';
import { userLogIn } from '../redux/users/userServices';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(userLogIn({ email: 'loredan@ukr.net', password: 'loredan' }));
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="/destination" element={<DestinationPage />} />{' '}
        <Route path="/listing" element={<ListingPage />} />{' '}
        <Route path="/pages" element={<PagesPage />} />{' '}
        <Route path="/contact" element={<ContactPage />} />{' '}
        <Route path="/login" element={<LogInPage />} />{' '}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;

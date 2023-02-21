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

import AppBar from './AppBar';
import Footer from './Footer/Footer';

const App = () => {
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
      <Footer />
    </>
  );
};

export default App;

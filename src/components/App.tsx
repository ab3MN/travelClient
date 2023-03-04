import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { userAuth } from '../redux/users/userServices';
import {
  HomePage,
  ContactPage,
  AboutPage,
  FaqPage,
  NotFoundPage,
  NewsPage,
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
        <Route path="/about" element={<AboutPage />} />{' '}
        <Route path="/contact" element={<ContactPage />} />{' '}
        <Route path="/faq" element={<FaqPage />} />{' '}
        <Route path="/404" element={<NotFoundPage />} />{' '}
        <Route path="/news" element={<NewsPage />} />{' '}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

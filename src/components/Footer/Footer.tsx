import React from 'react';
import FooterBot from './FooterBot/FooterBot';
import FooterTop from './FooterTop/FooterTop';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <FooterTop />
      <FooterBot />
    </footer>
  );
};

export default Footer;

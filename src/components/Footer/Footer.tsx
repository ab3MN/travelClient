import React from 'react';
import s from './Footer.module.scss';
import FooterBot from './FooterBot/FooterBot';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
  return (
    <footer>
      <FooterTop />
      <FooterBot />
    </footer>
  );
};

export default Footer;

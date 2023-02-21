import React from 'react';
import FooterList from './FooterList/FooterList';
import s from './FooterRight.module.scss';

const TOUR = [
  { text: 'Thailand', to: '', id: 1 },
  { text: 'Vietnam', to: '', id: 2 },
  { text: 'Cambodia', to: '', id: 3 },
  { text: 'Korea', to: '', id: 4 },
  { text: 'Japan', to: '', id: 5 },
];
const SUPPORT = [
  { text: 'Account', to: '', id: 1 },
  { text: 'Legal', to: '', id: 2 },
  { text: 'Contact', to: '', id: 3 },
  { text: 'Privacy Policy', to: '', id: 4 },
];
const USEFUL_PAGES = [
  { text: 'Deals', to: '', id: 1 },
  { text: 'FAQs', to: '', id: 2 },
  { text: 'Why Choose US', to: '', id: 3 },
  { text: 'Affiliate Program', to: '', id: 4 },
];

const FooterRight = () => {
  return (
    <div className={s.right}>
      <FooterList data={TOUR} title="TOUR" />
      <FooterList data={SUPPORT} title="SUPPORT" />{' '}
      <FooterList data={USEFUL_PAGES} title="USEFUL PAGES" />
    </div>
  );
};

export default FooterRight;

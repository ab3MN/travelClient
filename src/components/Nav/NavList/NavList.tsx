import React from 'react';
import s from './NavList.module.scss';
import NavListItem from './NavListItem/NavListItem';

const navPath = [
  { to: '/', name: 'home', id: 1 },
  {
    to: '/destination',
    name: 'destination',
    id: 2,
    data: [
      { name: 'Vietnam', id: 1, to: '/vietnam' },
      { name: 'Thailand', id: 2, to: '/thailand' },
      { name: 'Cambodia', id: 3, to: '/cambodia' },
      { name: 'Indonesia', id: 4, to: '/indonesia' },
    ],
  },
  {
    to: '/listing',
    name: 'listing',
    id: 3,
    data: [{ name: 'Tour listing ', id: 1, to: '/listing' }],
  },
  {
    to: '/pages',
    name: 'pages',
    id: 4,
    data: [
      { name: 'About Us', id: 1, to: '/about' },
      { name: 'FAQs', id: 2, to: '/faq' },
      { name: '404 Page', id: 3, to: '/404page' },
      { name: 'Blog', id: 4, to: '/blog' },
    ],
  },
  { to: '/contact', name: 'contact', id: 5 },
];

const NavList = () => {
  return (
    <ul className={s.list}>
      {navPath.map(el => (
        <li key={el.id} className={s.list__item}>
          <NavListItem name={el.name} to={el.to} data={el?.data} />
        </li>
      ))}
    </ul>
  );
};

export default NavList;

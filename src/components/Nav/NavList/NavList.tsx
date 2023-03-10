import React from 'react';
import s from './NavList.module.scss';
import NavListItem from './NavListItem/NavListItem';

const navPath = [
  { to: '/', name: 'home', id: 1 },
  {
    to: '/listing',
    name: 'listing',
    id: 2,
    data: [
      { name: 'Vietnam', id: 1, to: '/listing?location_name=vietnam' },
      { name: 'Thailand', id: 2, to: '/listing?location_name=thailand' },
      { name: 'Cambodia', id: 3, to: '/listing?location_name=cambodia' },
      { name: 'Indonesia', id: 4, to: '/listing?location_name=indonesia' },
    ],
  },
  {
    to: '/news',
    name: 'News',
    id: 3,
  },
  {
    to: '#',
    name: 'pages',
    id: 4,
    data: [
      { name: 'About Us', id: 1, to: '/about' },
      { name: 'FAQs', id: 2, to: '/faq' },
      { name: '404 Page', id: 3, to: '/404' },
    ],
  },
  { to: '/contact', name: 'contact us', id: 5 },
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

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './NavListItem.module.scss';
interface IProps {
  name: string;
  to: string;
  data?: Array<{
    name: string;
    to: string;
    id: number;
  }>;
}

const NavListItem: FC<IProps> = ({ name, data, to }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="container">
      <NavLink
        onMouseOver={() => setMenuOpen(true)}
        onMouseOut={() => setMenuOpen(false)}
        to={to}
        className={({ isActive }) =>
          isActive ? ` ${s.active} ` : `${s.nav__link}`
        }
      >
        {name}
        {data && (
          <i className="fa fa-chevron-down" style={{ fontSize: '8px' }}></i>
        )}
      </NavLink>
      {isMenuOpen && (
        <ul
          className={s.list}
          onMouseOver={() => setMenuOpen(true)}
          onMouseOut={() => setMenuOpen(false)}
        >
          {data?.map(el => (
            <li key={el.id} className={s.item}>
              <Link to={el.to} className={s.link}>
                {el.name}
              </Link>{' '}
              <div className={s.hr}></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavListItem;

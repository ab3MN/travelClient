import React from 'react';
import s from './NavAuthInfo.module.scss';
import NavAuthMenu from './NavAuthMenu/NavAuthMenu';

const NavAuthInfo = ({ avatar = '', name = '' }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const onClose = () => setMenuOpen(false);

  return (
    <div className={s.nav__info}>
      <div className={s.container}>
        <img src={avatar} alt="" className={s.avatar} />
        <span className={s.name} onClick={() => setMenuOpen(!isMenuOpen)}>
          Hi, {name}
          <i className="fa fa-angle-down"> </i>
        </span>
      </div>
      {isMenuOpen && <NavAuthMenu onClose={onClose} />}
    </div>
  );
};

export default NavAuthInfo;

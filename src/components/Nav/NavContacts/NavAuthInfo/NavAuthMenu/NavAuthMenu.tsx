import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './NavAuthMenu.module.scss';
import { useOutsideClose } from '../../../../../hooks/useOutsideClose';
import { useAppDispatch } from '../../../../../hooks/reduxHooks';
import { userLogOut } from '../../../../../redux/users/userServices';

interface IProps {
  onClose: () => void;
}

const NavAuthMenu: FC<IProps> = ({ onClose }) => {
  const ulRef = React.useRef(null);
  useOutsideClose(ulRef, onClose);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) =>
      e.code !== 'Escape' ? undefined : onClose();

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', onClose);
    };
  }, [onClose]);

  return (
    <ul className={s.menu} ref={ulRef}>
      <li className={s.item}>
        <Link to="/">Dashboard</Link>
      </li>
      <li className={s.item}>
        <Link to="/">Boking History</Link>
      </li>
      <div className={s.hr}></div>
      <li className={s.item} onClick={() => dispatch(userLogOut())}>
        <Link to="/">Log Out</Link>
      </li>
    </ul>
  );
};

export default NavAuthMenu;

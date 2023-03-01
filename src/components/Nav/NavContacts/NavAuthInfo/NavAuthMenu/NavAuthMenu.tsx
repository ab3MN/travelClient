import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './NavAuthMenu.module.scss';
import { useOutsideClose } from '../../../../../hooks/useOutsideClose';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/reduxHooks';
import { userLogOut } from '../../../../../redux/users/userServices';
import { useCloseByEscPress } from '../../../../../hooks/useCloseByEscPress';

interface IProps {
  onClose: () => void;
}

const NavAuthMenu: FC<IProps> = ({ onClose }) => {
  const ulRef = React.useRef(null);
  useOutsideClose(ulRef, onClose);
  useCloseByEscPress(onClose);

  const dispatch = useAppDispatch();
  const { refreshToken } = useAppSelector(s => s.user);

  return (
    <ul className={s.menu} ref={ulRef}>
      <li className={s.item}>
        <Link to="/">Dashboard</Link>
      </li>
      <li className={s.item}>
        <Link to="/">Boking History</Link>
      </li>
      <div className={s.hr}></div>
      <li
        className={s.item}
        onClick={() => refreshToken && dispatch(userLogOut({ refreshToken }))}
      >
        <Link to="/">Log Out</Link>
      </li>
    </ul>
  );
};

export default NavAuthMenu;

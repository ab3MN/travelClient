import React, { FC } from 'react';
import s from './FooterList.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  data: Array<{ text: string; to: string; id: number }>;
  title: string;
}

const FooterList: FC<IProps> = ({ data, title }) => {
  return (
    <ul className={s.list}>
      <h4>{title}</h4>
      {data.map(({ text, to, id }) => (
        <li className={s.item} key={id}>
          <Link to={to}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;

import React, { FC } from 'react';
import FAQListItem from '../FAQListItem/FAQListItem';
import s from './FAQList.module.scss';

interface IItem {
  text: string;
  title: string;
  id: string;
}
interface IProps {
  list: IItem[];
}

const FAQList: FC<IProps> = ({ list }) => (
  <ul className={s.list}>
    {list.map(({ title, text, id }) => (
      <li key={id}>
        <FAQListItem title={title} text={text} />
      </li>
    ))}
  </ul>
);

export default FAQList;

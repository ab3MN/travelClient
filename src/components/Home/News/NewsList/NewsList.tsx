import React, { FC } from 'react';
import NewsListItem from '../NewsListItem/NewsListItem';
import s from './NewsList.module.scss';

interface INewsList {
  img: string;
  location: string;
  date: string;
  title: string;
  description: string;
  id: number;
}

interface IProps {
  data: INewsList[];
}

const NewsList: FC<IProps> = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map(({ img, location, date, title, description, id }) => (
        <li key={id} className={s.item}>
          <NewsListItem
            img={img}
            location={location}
            date={date}
            title={title}
            description={description}
          />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;

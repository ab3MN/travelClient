import React, { FC } from 'react';
import s from './AboutArticlesList.module.scss';
import { Link } from 'react-router-dom';
import { getRandomLightColor } from '../../../helpers/getRandomLightColor';

interface IList {
  img: string;
  location: string;
  date: string;
  title: string;
  description: string;
  id: number;
}

interface IProps {
  data: IList[];
  style?: any;
}

const AboutArticlesList: FC<IProps> = ({ data, style }) => (
  <ul className={s.list} style={style}>
    {data.map(({ img, location, date, title, description, id }) => (
      <li key={id} className={s.item}>
        <div>
          <Link className={s.link} to="/">
            <div className={s.img__box}>
              <img src={img} className={s.img} alt="news__photo" />
            </div>
          </Link>
          <ul className={s.description__list}>
            <li className={s.text} style={{ color: getRandomLightColor() }}>
              {location}
            </li>
            <li className={s.date}>{date} </li>
          </ul>
          <h3 className={s.title}>
            <Link to="/"> {title}</Link>
          </h3>
          <p className={s.description}>{description}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default AboutArticlesList;

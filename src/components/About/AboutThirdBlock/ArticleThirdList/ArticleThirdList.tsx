import React from 'react';
import ArticleThirdListItem from '../ArticleThirdListItem/ArticleThirdListItem';
import s from './ArticleThirdList.module.scss';

const teamList = [
  {
    name: 'Simon',
    job: 'Owner',
    country: 'UK',
    img: './img/AboutPage/ThirdBlock/1.png',
    id: '1',
  },
  {
    name: 'Sofie',
    job: 'General Manager',
    country: 'USA',
    img: './img/AboutPage/ThirdBlock/2.png',
    id: '2',
  },
  {
    name: 'Chloe',
    job: 'General Manager',
    country: 'USA',
    img: './img/AboutPage/ThirdBlock/3.png',
    id: '3',
  },
  {
    name: 'Jack',
    job: 'Videographer',
    country: 'Germany',
    img: './img/AboutPage/ThirdBlock/4.png',
    id: '4',
  },
  {
    name: 'Fiona',
    job: 'Tour Coordinator',
    country: 'UK',
    img: './img/AboutPage/ThirdBlock/5.png',
    id: '5',
  },
  {
    name: 'Oratai',
    job: 'Thailand Operations',
    country: 'Thailand',
    img: './img/AboutPage/ThirdBlock/6.png',
    id: '6',
  },
  {
    name: 'Thuy',
    job: 'Vietnam Operations',
    country: 'Vietnam',
    img: './img/AboutPage/ThirdBlock/7.png',
    id: '7',
  },
  {
    name: 'Ima',
    job: 'Bali Operations',
    country: 'Bali',
    img: './img/AboutPage/ThirdBlock/8.png',
    id: '8',
  },
];

const ArticleThirdList = () => (
  <ul className={s.list}>
    {teamList.map(({ name, job, country, img, id }) => (
      <li key={id}>
        <ArticleThirdListItem
          name={name}
          job={job}
          country={country}
          img={img}
        />
      </li>
    ))}
  </ul>
);

export default ArticleThirdList;

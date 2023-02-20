import React from 'react';
import SectionDescription from '../../../shared/titles/SectionDescription/SectionDescription';
import SectionTitle from '../../../shared/titles/SectionTitle/SectionTitle';
import NewsList from './NewsList/NewsList';
import s from './News.module.scss';
import ViewButton from '../../../shared/Buttons/ViewButton/ViewButton';

const newsList = [
  {
    img: './img/news/1.png',
    location: 'THAILAND',
    date: '11 May, 2020',
    title: '10 Thai Customs That Might Suprise You',
    description:
      'Thailand checks all the must-have boxes for backpackers affordable, beautiful, safe, and never, ever cold. You might have seen photos of the white-sand beaches and bustling streets and frollicking elephants and mouth-watering food.',
    id: 1,
  },
  {
    img: './img/news/2.png',
    location: 'THAILAND',
    date: '11 May, 2020',
    title: '10 Thai Customs That Might Suprise You',
    description:
      'Thailand checks all the must-have boxes for backpackers affordable, beautiful, safe, and never, ever cold. You might have seen photos of the white-sand beaches and bustling streets and frollicking elephants and mouth-watering food.',
    id: 2,
  },
  {
    img: './img/news/3.png',
    location: 'THAILAND',
    date: '11 May, 2020',
    title: '10 Thai Customs That Might Suprise You',
    description:
      'Thailand checks all the must-have boxes for backpackers affordable, beautiful, safe, and never, ever cold. You might have seen photos of the white-sand beaches and bustling streets and frollicking elephants and mouth-watering food.',
    id: 3,
  },
];

const News = () => {
  return (
    <section className={s.news}>
      <SectionTitle text="Latest News" />
      <SectionDescription text="Learn More About Us" />
      <NewsList data={newsList} />
      <ViewButton text="READ MORE ARTICLES" />
    </section>
  );
};

export default News;

import React from 'react';
import ViewButton from '../../../shared/Buttons/ViewButton/ViewButton';
import AboutArticlesList from '../../../shared/Lists/AboutArticlesList/AboutArticlesList';
import ArticleTitle from '../../../shared/titles/ArticleTitle/ArticleTitle';
import s from './AboutFourthBlock.module.scss';

const list = [
  {
    img: './img/AboutPage/FourthBlock/1.png',
    location: 'THAILAND',
    date: '19 Apr, 2020',
    title: '10 Thai Customs That Might Suprise You',
    description:
      'Thailand checks all the must-have boxes for backpackers; affordable, beautiful, safe, and never, ever cold. You might have seen photos of the white-sand beaches and bustling streets and frollicking elephants and mouth-watering food. It may be hard to believe, but there’s so much more to experience. While the Land of Smiles certainly deserves every ounce […]',
    id: 1,
  },
  {
    img: './img/AboutPage/FourthBlock/2.png',
    location: 'CAMBODIA',
    date: '30 Nov, 2021',
    title: '10 Thai Customs That Might Suprise You',
    description:
      'Thailand checks all the must-have boxes for backpackers; affordable, beautiful, safe, and never, ever cold. You might have seen photos of the white-sand beaches and bustling streets and frollicking elephants and mouth-watering food. It may be hard to believe, but there’s so much more to experience. While the Land of Smiles certainly deserves every ounce […]',
    id: 2,
  },
  {
    img: './img/AboutPage/FourthBlock/3.png',
    location: 'VIETNAM',
    date: '11 May, 2022',
    title: '10 Thai Customs That Might Suprise You',
    description:
      'Thailand checks all the must-have boxes for backpackers; affordable, beautiful, safe, and never, ever cold. You might have seen photos of the white-sand beaches and bustling streets and frollicking elephants and mouth-watering food. It may be hard to believe, but there’s so much more to experience. While the Land of Smiles certainly deserves every ounce […]',
    id: 3,
  },
];

const AboutFourthBlock = () => (
  <section className={s.section}>
    <div className={s.container}>
      <ArticleTitle
        title="Learn More About Asia"
        style={{ textAlign: 'center', padding: '40px 0 ' }}
      />
      <AboutArticlesList data={list} style={{ paddingBottom: '50px' }} />
      <ViewButton text="read more articles" />
    </div>
  </section>
);
export default AboutFourthBlock;

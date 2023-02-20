import React from 'react';
import SectionDescription from '../../../shared/titles/SectionDescription/SectionDescription';
import SectionTitle from '../../../shared/titles/SectionTitle/SectionTitle';
import Comments from './Comments/Comments';
import s from './Location.module.scss';
import LocationList from './LocationList/LocationList';

const ICommentsDB = [
  {
    img: './img/location/Girl.png',
    alt: 'girl',
    text: "Since 2014, we've helped more than 500,000 people of all ages enjoy the  best outdoor experience of their lives. Whether it's for one days or a two-week vacation.",
    author: 'Minh Chau',
    description: 'Rated by travellers on facebook',
    stars: 5,
    id: 1,
  },
  {
    img: './img/location/Girl.png',
    alt: 'girl',
    text: "Since 2014, we've helped more than 500,000 people of all ages enjoy the  best outdoor experience of their lives. Whether it's for one days or a two-week vacation.",
    author: 'Minh Chau',
    description: 'Rated by travellers on facebook',
    stars: 5,
    id: 2,
  },
  {
    img: './img/location/Girl.png',
    alt: 'girl',
    text: "Since 2014, we've helped more than 500,000 people of all ages enjoy the  best outdoor experience of their lives. Whether it's for one days or a two-week vacation.",
    author: 'Minh Chau',
    description: 'Rated by travellers on facebook',
    stars: 5,
    id: 3,
  },
];

const Location = () => {
  return (
    <section className={s.section}>
      <SectionTitle text="Location" style={{ paddingTop: '100px' }} />
      <SectionDescription text="Where Do You Want To Travel?" />
      <LocationList />
      <Comments data={ICommentsDB} />
    </section>
  );
};

export default Location;

import React from 'react';
import FAQList from '../FAQList/FAQList';
import s from './FAQLeft.module.scss';
const list = [
  {
    title: 'Are there any age restrictions for this tour?',
    text: 'We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all! ',
    id: '1',
  },

  {
    title: 'Can I wash my clothes during the tour?',
    text: 'We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all! ',
    id: '2',
  },

  {
    title: 'Will I have access to the internet?',
    text: 'We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all! ',
    id: '3',
  },

  {
    title: 'Do I need any vaccinations?',
    text: 'We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all! ',
    id: '4',
  },
];

const FAQLeft = () => (
  <article>
    <FAQList list={list} />
    <div className={s.div}></div>
  </article>
);

export default FAQLeft;

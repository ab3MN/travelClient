import React from 'react';
import s from './About.module.scss';
import AboutLeft from './AboutLeft/AboutLeft';
import AboutRight from './AboutRight/AboutRight';

const About = () => {
  return (
    <section className={s.about}>
      <article className={s.container}>
        <AboutLeft />
        <AboutRight />
      </article>
    </section>
  );
};

export default About;

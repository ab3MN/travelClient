import React from 'react';
import s from './AboutFirstBlockLeft.module.scss';

const AboutFirstBlockLeft = () => {
  return (
    <article className={s.left}>
      <div>
        <img src="./img/HomePage/about/img.png" alt="about" className={s.img} />
      </div>
    </article>
  );
};

export default AboutFirstBlockLeft;

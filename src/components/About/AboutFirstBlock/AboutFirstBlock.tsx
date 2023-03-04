import React from 'react';
import s from './AboutFirstBlock.module.scss';
import AboutFirstBlockLeft from './AboutFirstBlockLeft/AboutFirstBlockLeft';
import AboutFirstBlockRight from './AboutFirstBlockRight/AboutFirstBlockRight';

const AboutFirstBlock = () => {
  return (
    <section className={s.section}>
      <h3 className={s.title}>
        Since 2013, we have offered group backpacking tours through the most
        alluring destinations in Southeast Asia!
      </h3>
      <div className={s.container}>
        {' '}
        <AboutFirstBlockLeft />
        <AboutFirstBlockRight />
      </div>
    </section>
  );
};

export default AboutFirstBlock;

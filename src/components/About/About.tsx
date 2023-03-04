import React from 'react';
import PageHeader from '../../shared/PageHeader/PageHeader';
import AboutFirstBlock from './AboutFirstBlock/AboutFirstBlock';
import AboutFourthBlock from './AboutFourthBlock/AboutFourthBlock';
import AboutSecondBlock from './AboutSecondBlock/AboutSecondBlock';
import AboutThirdBlock from './AboutThirdBlock/AboutThirdBlock';

const About = () => {
  return (
    <main>
      <PageHeader
        title="About Us"
        description="We’re Solo Agency"
        backGroundImg="/img/AboutPage/header__bgc.png"
      />
      <AboutFirstBlock />
      <AboutSecondBlock />
      <AboutThirdBlock />
      <AboutFourthBlock />
    </main>
  );
};

export default About;

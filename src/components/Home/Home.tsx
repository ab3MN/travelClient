import React from 'react';
import Deals from './Deals/Deals';
import Title from './Tittle/Title';
import Location from './Location/Location';
import About from './About/About';
import News from './News/News';

const Home = () => {
  return (
    <>
      <Title />
      <Deals />
      <Location />
      <About />
      <News />
    </>
  );
};

export default Home;

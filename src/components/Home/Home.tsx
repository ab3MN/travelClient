import React from 'react';
import Deals from './Deals/Deals';
import Title from './Tittle/Title';
import Location from './Location/Location';
import About from './About/About';
import News from './News/News';
import Multi from './Multi/Multi';

const Home = () => {
  return (
    <main>
      <Title />
      <Deals />
      <Location />
      <About />
      <News />
      <Multi />
    </main>
  );
};

export default Home;

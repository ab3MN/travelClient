import React from 'react';
import Deals from './Deals/Deals';
import Title from './Tittle/Title';
import Location from './Location/Location';
import Comments from './Location/Comments/Comments';

const Home = () => {
  return (
    <>
      <Title />
      <Deals />
      <Location />
      <Comments />
    </>
  );
};

export default Home;

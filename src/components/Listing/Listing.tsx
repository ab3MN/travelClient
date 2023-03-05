import React from 'react';
import PageHeader from '../../shared/PageHeader/PageHeader';
import s from './Listing.module.scss';
import ListingFilters from './ListingFilters/ListingFilters';

const Listing = ({ location = '' }) => {
  const [_location, setLocation] = React.useState('');

  return (
    <main>
      <PageHeader
        title="Tour listing"
        description="Pick Your Best Experience"
        backGroundImg="./img/ListingPage/header.png"
      />
      <section className={s.section}>
        <ListingFilters setLocation={setLocation} />
        <div className={s.hr}></div>
      </section>
    </main>
  );
};

export default Listing;

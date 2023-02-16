import React from 'react';
import SectionDescription from '../../../shared/titles/SectionDescription/SectionDescription';
import SectionTitle from '../../../shared/titles/SectionTitle/SectionTitle';
import s from './Location.module.scss';
import LocationList from './LocationList/LocationList';

const Location = () => {
  return (
    <section className={s.section}>
      <SectionTitle text="Location" style={{ paddingTop: '100px' }} />
      <SectionDescription text="Where Do You Want To Travel?" />
      <LocationList />
    </section>
  );
};

export default Location;

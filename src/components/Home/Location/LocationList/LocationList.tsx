import React from 'react';
import ViewButton from '../../../../shared/Buttons/ViewButton/ViewButton';
import LocationItem from './LocationItem/LocationItem';
import s from './LocationList.module.scss';

const locationListProps = [
  { img: './img/location/1.png', id: 1 },
  { img: './img/location/2.jpg', id: 2 },
  { img: './img/location/3.png', id: 3 },
  { img: './img/location/4.png', id: 4 },
];

const LocationList = () => {
  return (
    <>
      <ul className={s.list}>
        {locationListProps.map(el => (
          <li key={el.id}>
            <LocationItem img={el.img} />
          </li>
        ))}
      </ul>
      <ViewButton
        text="VIEW ALL DESTINATIONS"
        style={{ margin: '50px auto 100px' }}
      />
    </>
  );
};

export default LocationList;

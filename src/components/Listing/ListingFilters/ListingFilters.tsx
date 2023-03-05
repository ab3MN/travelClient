import React, { FC } from 'react';
import PressButton from '../../../shared/Buttons/PressButton/PressButton';
import Selector from '../../../shared/Selector/Selector';
import s from './ListingFilters.module.scss';

const locationOptions = ['ThaiLand', 'Vietnam', 'Cambodia', 'Indonesia'];

interface IProps {
  setLocation: (location: string) => void;
}

const ListingFilters: FC<IProps> = ({ setLocation }) => {
  return (
    <article className={s.container}>
      {' '}
      <Selector
        options={locationOptions}
        defaultOptions="Where are you going?"
        setSelector={setLocation}
        style={{ width: '330px' }}
      />
      <div>
        <PressButton type="button" name="search" />
      </div>
    </article>
  );
};

export default ListingFilters;

import React from 'react';
import ViewButton from '../../../../shared/Buttons/ViewButton/ViewButton';
import SectionDescription from '../../../../shared/titles/SectionDescription/SectionDescription';
import SectionTitle from '../../../../shared/titles/SectionTitle/SectionTitle';
import s from './MultiLeft.module.scss';

const MultiLeft = () => {
  return (
    <div className={s.left}>
      <SectionTitle
        text="Multi-Tours"
        style={{ textAlign: 'left', padding: '100px 0 20px' }}
      />
      <SectionDescription
        text="Discount on Quantity"
        style={{ textAlign: 'left' }}
      />
      <p className={s.description}>
        Book a tour today and enjoy exclusive savings on any future trip you
        book! There’s no time limit or expiry date on these savings
      </p>
      <div>
        <img src="./img/HomePage/multi/left.png" alt="discount" />
      </div>
      <ViewButton
        text="find out more"
        style={{ textAlign: 'left', display: 'inline' }}
      />
    </div>
  );
};

export default MultiLeft;

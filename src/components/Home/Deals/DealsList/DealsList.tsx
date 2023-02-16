import React, { FC } from 'react';
import DealsListItem from '../DealsListItem/DealsListItem';
import { DealType } from '../DealType';
import s from './DealsList.module.scss';

interface DealsListProps {
  deals: DealType[] | undefined;
}

const DealsList: FC<DealsListProps> = ({ deals }) => {
  return (
    <ul className={s.list}>
      {deals?.map(
        ({ id, title, imgTitle, text, duration, size, imgSrc, price }) => (
          <li key={id}>
            <DealsListItem
              title={title}
              imgTitle={imgTitle}
              text={text}
              duration={duration}
              size={size}
              imgSrc={imgSrc}
              price={price}
            />
          </li>
        ),
      )}
    </ul>
  );
};

export default DealsList;

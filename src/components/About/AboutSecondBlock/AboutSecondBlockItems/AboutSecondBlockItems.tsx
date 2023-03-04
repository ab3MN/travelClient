import React, { FC } from 'react';
import s from './AboutSecondBlockItems.module.scss';
import SectionDescription from '../../../../shared/titles/SectionDescription/SectionDescription';

interface IProps {
  title: string;
  description: string;
  img: string;
  alt: string;
  styleSecondItem?: any;
  styleFirstItem?: any;
}

const AboutSecondBlockItems: FC<IProps> = ({
  title,
  description,
  img,
  alt,
  styleFirstItem,
  styleSecondItem,
}) => {
  return (
    <article className={s.item}>
      <div className={s.description__box} style={styleFirstItem}>
        <SectionDescription
          text={title}
          style={{ textAlign: 'left', fontSize: '30px' }}
        />
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.img__box} style={styleSecondItem}>
        <img src={img} alt={alt} />
      </div>
    </article>
  );
};

export default AboutSecondBlockItems;

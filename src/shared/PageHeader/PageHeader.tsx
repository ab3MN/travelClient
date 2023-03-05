import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SectionDescription from '../titles/SectionDescription/SectionDescription';
import SectionTitle from '../titles/SectionTitle/SectionTitle';
import s from './PageHeader.module.scss';

interface IProps {
  title: string;
  description: string;
  backGroundImg: string;
}

const PageHeader: FC<IProps> = ({ title, description, backGroundImg }) => {
  return (
    <header
      className={s.header}
      style={{
        backgroundImage: `url(${backGroundImg})`,
      }}
    >
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={s.item}></li>
          <li className={s.item}>{title}</li>
        </ul>{' '}
        <SectionTitle
          text={title}
          style={{
            fontSize: '20px',
            textAlign: 'left',
            padding: '55px 0 15px',
            letterSpacing: '0.48px',
            lineHeight: '32px',
          }}
        />
        <SectionDescription
          text={description}
          style={{
            fontSize: '36px',
            textAlign: 'left',
            letterSpacing: '-0.8px',
            lineHeight: '36px',
          }}
        />
      </div>
    </header>
  );
};

export default React.memo(PageHeader, () => true);

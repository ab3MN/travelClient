import React from 'react';
import { Link } from 'react-router-dom';
import CalendarSvg from '../../../../shared/SVG/CalendarSvg';
import { getRandomLightColor } from '../../../../helpers/getRandomLightColor';
import s from './DealsListItem.module.scss';
import GroupSvg from '../../../../shared/SVG/GroupSvg';
import PressButton from '../../../../shared/Buttons/PressButton/PressButton';

const DealsListItem = ({
  title = '',
  imgTitle = '',
  text = '',
  duration = '',
  size = '',
  imgSrc = '',
  price = '',
}) => {
  return (
    <article className={s.list__item}>
      <Link className={s.link} to="/">
        <div
          className={s.img__title}
          style={{ backgroundColor: getRandomLightColor() }}
        >
          {imgTitle}
        </div>
        <div className={s.img__box}>
          <img src={imgSrc} alt="item__photo" className={s.img} />
        </div>
      </Link>
      <h5 className={s.list__title}>
        <Link to="">{title}</Link>
      </h5>
      <p className={s.list__text}>{text}</p>
      {/* ==================== INFO ==================== */}
      <div className={s.list__hr}></div>
      <div className={s.list__info}>
        <div className={s.tour__item}>
          <div className={s.svg__box}>
            <CalendarSvg />
          </div>
          <div>
            <h6>Duration</h6>
            <p>{duration}</p>
          </div>
        </div>
        <div className={s.tour__item}>
          <div className={s.svg__box}>
            <GroupSvg />{' '}
          </div>
          <div>
            <h6>Group Size</h6>
            <p>{size}</p>
          </div>
        </div>
      </div>
      <div className={s.list__hr}></div>
      <div className={s.list__footer}>
        <p>€{price}</p>
        <PressButton
          name="book now"
          style={{
            padding: '16px 23px',
            position: 'absolute',
            top: '5px',
            right: '20px',
          }}
        />
      </div>
    </article>
  );
};

export default DealsListItem;

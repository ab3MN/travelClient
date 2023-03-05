import React, { FC } from 'react';
import s from './DealsList.module.scss';
import { Link } from 'react-router-dom';
import { getRandomLightColor } from '../../../helpers/getRandomLightColor';
import CalendarSvg from '../../SVG/CalendarSvg';
import GroupSvg from '../../SVG/GroupSvg';
import PressButton from '../../Buttons/PressButton/PressButton';

interface IProps {
  data: Array<{
    imgTitle: string;
    imgSrc: string;
    title: string;
    text: string;
    duration: string;
    size: string;
    id: string;
    price: string;
  }>;
}

const DealsList: FC<IProps> = ({ data }) => (
  <ul className={s.list}>
    {data?.map(
      ({ id, title, imgTitle, text, duration, size, imgSrc, price }) => (
        <li key={id}>
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
        </li>
      ),
    )}
  </ul>
);

export default React.memo(DealsList, (next, prev) =>
  next.data.length === prev.data.length ? true : false,
);

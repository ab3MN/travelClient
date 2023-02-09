import React from 'react';
import { Link } from 'react-router-dom';
import CalendarSvg from '../../../shared/SVG/CalendarSvg';
import { getRandomLightColor } from '../../../helpers/getRandomLightColor';
import './DealsListItem.scss';
import GroupSvg from '../../../shared/SVG/GroupSvg';
import PressButton from '../../../shared/Buttons/PressButton/PressButton';

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
    <article className='deals__list--item'>
      <div className='deals__list--img__box'>
        <div
          className='img__box--title '
          style={{ backgroundColor: getRandomLightColor() }}>
          {imgTitle}
        </div>
        <Link to=''>
          <img src={imgSrc} alt={imgTitle} />
        </Link>
      </div>
      <h5 className='deals__list--title'>
        <Link to=''>{title}</Link>
      </h5>
      <p className='deals__list--text'>{text}</p>
      <div className='deals__list--hr'></div>{' '}
      {/* ==================== INFO ==================== */}
      <div className='deals__list--info'>
        <div className='deal__tour--item'>
          <div className='svg__box'>
            <CalendarSvg />
          </div>
          <div>
            <h6>Duration</h6>
            <p>{duration}</p>
          </div>
        </div>
        <div className='deal__tour--item'>
          <div className='svg__box'>
            <GroupSvg />{' '}
          </div>
          <div>
            <h6>Group Size</h6>
            <p>{size}</p>
          </div>
        </div>
      </div>
      <div className='deals__list--hr'></div>
      <div className='deals__list--footer'>
        <p>€{price}</p>
        <PressButton
          name='book now'
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

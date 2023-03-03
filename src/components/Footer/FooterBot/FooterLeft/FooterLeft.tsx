import React from 'react';
import SocialIcons from '../../../../shared/SocialIcons/SocialIcons';
import s from './FooterLeft.module.scss';
import FooterSelector from './FooterSelector/FooterSelector';

const FooterLeft = () => {
  return (
    <div className={s.left}>
      <h4>Solo</h4>
      <form className={s.form}>
        <label htmlFor="" className={s.label}>
          Currencies
        </label>{' '}
        <FooterSelector />
        <SocialIcons imgHeight="45px" imgWidth="40px" />
      </form>
    </div>
  );
};

export default FooterLeft;

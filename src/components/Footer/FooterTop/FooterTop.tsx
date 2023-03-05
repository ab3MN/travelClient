import React from 'react';
import PressButton from '../../../shared/Buttons/PressButton/PressButton';
import s from './FooterTop.module.scss';

const FooterTop = () => {
  console.log('aaa');

  return (
    <article className={s.top}>
      <form className={s.form}>
        <label htmlFor="text email">
          Hot Deals. Awesome Chat. Straight to Your Inbox
        </label>

        <div className={s.input__box}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <PressButton
          name="Sign Me Up"
          style={{
            backgroundColor: '#fff',
            color: '#123a32',
            boxShadow: '0px 5px 0px #c8c8c8',
            padding: '14px 66px',
          }}
        />
      </form>
    </article>
  );
};

export default FooterTop;

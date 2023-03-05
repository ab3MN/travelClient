import React from 'react';
import s from './GoogleButton.module.scss';

const GoogleButton = () => {
  return (
    <a href="/" className={s.button}>
      <i className={`fa fa-google `} aria-hidden="true"></i>
      <span>CONTINUE WITH GOOGLE</span>
    </a>
  );
};

export default React.memo(GoogleButton, () => true);

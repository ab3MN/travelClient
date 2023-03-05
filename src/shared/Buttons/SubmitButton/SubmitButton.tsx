import React from 'react';
import s from './SubmitButton.module.scss';

const SubmitButton = ({ text = '' }) => (
  <button className={s.button} type="submit">
    {text}
  </button>
);

export default React.memo(SubmitButton, () => true);

import React, { FC } from 'react';
import s from './LinkButton.module.scss';

interface IProps {
  text: string;
  callback?: () => void;
}
const LinkButton: FC<IProps> = ({ text, callback }) => (
  <button type="button" onClick={callback} className={s.button}>
    {text}
  </button>
);

export default LinkButton;

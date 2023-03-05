import React, { FC } from 'react';
import s from './AuthForm.module.scss';

interface IProps {
  children: React.ReactNode;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const AuthForm: FC<IProps> = ({ children, onSubmit }) => (
  <form className={s.form} onSubmit={onSubmit}>
    {children}
  </form>
);

export default React.memo(AuthForm, () => true);

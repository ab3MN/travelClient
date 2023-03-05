import React, { FC } from 'react';
import s from './FormSection.module.scss';

interface IProps {
  children: React.ReactNode;
}

const FormSection: FC<IProps> = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

export default React.memo(FormSection, () => true);

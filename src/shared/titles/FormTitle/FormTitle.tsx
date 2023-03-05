import React from 'react';
import s from './FormTitle.module.scss';

const FormTitle = ({ text = '' }) => <h2 className={s.title}>{text}</h2>;

export default React.memo(FormTitle, () => true);

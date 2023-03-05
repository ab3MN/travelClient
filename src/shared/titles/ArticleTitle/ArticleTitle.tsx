import React, { FC } from 'react';
import s from './ArticleTitle.module.scss';
interface IProps {
  title: string;
  style?: any;
}

const ArticleTitle: FC<IProps> = ({ title, style }) => (
  <h3 className={s.title} style={style}>
    {title}
  </h3>
);
export default React.memo(ArticleTitle, () => true);

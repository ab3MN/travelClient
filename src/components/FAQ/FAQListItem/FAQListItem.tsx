import React, { FC } from 'react';
import s from './FAQListItem.module.scss';
interface IProps {
  title: string;
  text: string;
}

const FAQListItem: FC<IProps> = ({ title, text }) => {
  const [isTextVisible, setTextVisible] = React.useState(false);

  const handleClick = () => setTextVisible(!isTextVisible);
  return (
    <article className={s.item}>
      <h5 className={s.title} onClick={handleClick}>
        {title}{' '}
        {!isTextVisible ? (
          <i className="fa fa-chevron-down" style={{ fontSize: '12px' }}></i>
        ) : (
          <i className="fa fa-chevron-up" style={{ fontSize: '12px' }}></i>
        )}
      </h5>
      <div className={isTextVisible ? s.text : s.hide}>{text}</div>
    </article>
  );
};

export default FAQListItem;

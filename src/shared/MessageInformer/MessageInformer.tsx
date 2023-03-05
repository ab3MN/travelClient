import React, { FC } from 'react';
import s from './MessageInformer.module.scss';

const MessageInformer: FC<{ message: string }> = React.memo(
  ({ message = '' }) => {
    return <div className={s.box}>{message}</div>;
  },
);

export default React.memo(MessageInformer, (next, prev) =>
  next.message === prev.message ? true : false,
);

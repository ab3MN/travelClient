import React from 'react';
import s from './Comments.module.scss';
import CommentsLeft from './CommentsLeft/CommentsLeft';
import CommentsRight from './CommentsRight/CommentsRight';

const Comments = () => {
  return (
    <article className={s.artcile}>
      <CommentsLeft />
      <CommentsRight />
    </article>
  );
};

export default Comments;

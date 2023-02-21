import React from 'react';
import s from './Multi.module.scss';
import MultiLeft from './MultiLeft/MultiLeft';
import MultiRight from './MultiRight/MultiRight';

const Multi = () => {
  return (
    <section className={s.multi}>
      <article className={s.container}>
        <MultiLeft />
        <MultiRight />
      </article>
    </section>
  );
};

export default Multi;

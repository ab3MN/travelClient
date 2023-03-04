import React from 'react';
import PageHeader from '../../shared/PageHeader/PageHeader';
import s from './News.module.scss';

const News = () => (
  <main>
    <PageHeader
      title="Lastest News"
      description="Learn More About Tours"
      backGroundImg="./img/NewsPage/header.png"
    />
    <section className={s.section}></section>
  </main>
);

export default News;

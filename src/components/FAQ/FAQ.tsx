import React from 'react';
import PageHeader from '../../shared/PageHeader/PageHeader';
import ArticleTitle from '../../shared/titles/ArticleTitle/ArticleTitle';
import s from './FAQ.module.scss';
import FAQLeft from './FAQLeft/FAQLeft';
import FAQRight from './FAQRight/FAQRight';

const FAQ = () => (
  <main className={s.main}>
    <PageHeader
      title="FAQs"
      description="Frequently Questions Asked"
      backGroundImg="./img/FaqPage/bgc.png"
    />
    <section className={s.section}>
      <ArticleTitle
        title="Find answers to your questions before joining a tour so that you can find out exactly what you want to know."
        style={{
          textAlign: 'center',
          fontSize: '18px',
          padding: '60px 200px',
          lineHeight: '26px',
        }}
      />
      <div className={s.container}>
        <FAQLeft />
        <FAQRight />
      </div>
    </section>
  </main>
);

export default FAQ;

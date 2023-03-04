import React from 'react';
import ArticleTitle from '../../../shared/titles/ArticleTitle/ArticleTitle';
import s from './AboutThirdBlock.module.scss';
import ArticleThirdList from './ArticleThirdList/ArticleThirdList';

const AboutThirdBlock = () => (
  <section className={s.section}>
    <div className={s.container}>
      <ArticleTitle
        title="Meet Our Team"
        style={{ textAlign: 'center', paddingTop: '100px' }}
      />
      <ArticleThirdList />
    </div>
  </section>
);

export default AboutThirdBlock;

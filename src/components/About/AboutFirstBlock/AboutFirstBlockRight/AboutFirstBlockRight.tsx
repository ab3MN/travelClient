import React from 'react';
import AboutLists from '../../../../shared/Lists/AboutLists/AboutLists';
import ArticleTitle from '../../../../shared/titles/ArticleTitle/ArticleTitle';
import s from './AboutFirstBlockRight.module.scss';

const AboutFirstBlockRight = () => {
  return (
    <article className={s.right}>
      <ArticleTitle
        title="Why Choose US"
        style={{ padding: '80px 0px 40px 166px' }}
      />
      <AboutLists />
    </article>
  );
};

export default AboutFirstBlockRight;

import React from 'react';
import PressButton from '../../shared/Buttons/PressButton/PressButton';
import AboutArticlesList from '../../shared/Lists/AboutArticlesList/AboutArticlesList';
import PageHeader from '../../shared/PageHeader/PageHeader';
import s from './News.module.scss';
import NewsFilter from './NewsFilter/NewsFilter';
import data from './NewsList.json';

const News = () => {
  const [list, setList] = React.useState(data.slice(0, 3));
  const divRef = React.useRef<HTMLDivElement>(null);

  const loadMoreHandler = () => {
    if (data.length <= list.length) return;
    const arr = data.slice(list.length, list.length + 3);
    setList(prev => [...prev, ...arr]);
    divRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const [filter, setFilter] = React.useState('');

  const [selector, setSelector] = React.useState('');

  const filtredList = React.useMemo(
    () =>
      list.filter(
        el =>
          el?.location?.toLowerCase().includes(filter.toLowerCase()) &&
          el?.location?.toLowerCase().includes(selector.toLowerCase()),
      ),
    [filter, list, selector],
  );

  return (
    <main className={s.main}>
      <PageHeader
        title="Lastest News"
        description="Learn More About Tours"
        backGroundImg="./img/NewsPage/header.png"
      />
      <section className={s.section}>
        <NewsFilter
          setFilter={setFilter}
          filter={filter}
          setSelector={setSelector}
        />
        <article className={s.list__container}>
          <AboutArticlesList data={filtredList} />
          <div className={s.box} ref={divRef}>
            <PressButton
              type="button"
              name="Load More"
              onClick={loadMoreHandler}
              checkRender={filtredList.length}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default News;

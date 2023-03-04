import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFound.module.scss';

const NotFound = () => (
  <main>
    <section className={s.section}>
      <article className={s.container}>
        <div className={s.left}>
          <h2>404,Page Not Found</h2>
          <p>Something's wrong here. You have traveled out of the world</p>
          <Link to="/">BACK TO HOMEPAGE</Link>
        </div>
        <div className={s.right}>
          <img src="./img/404/bgc.png" alt="skeleton in a spacesuit" />
        </div>
      </article>
    </section>
  </main>
);

export default NotFound;

import React from 'react';
import s from './FooterLeft.module.scss';

const Icons = [
  {
    src: './img/footer/fb.png',
    id: 1,
    href: 'https://www.facebook.com/',
  },
  {
    src: './img/footer/insta.png',
    id: 2,
    href: 'https://www.instagram.com',
  },
  {
    src: './img/footer/pin.png',
    id: 3,
    href: 'https://ru.pinterest.com/',
  },
  {
    src: './img/footer/twitter.png',
    id: 4,
    href: 'https://twitter.com/',
  },
];

const FooterLeft = () => {
  return (
    <div className={s.left}>
      <h4>Solo</h4>
      <form className={s.form}>
        <label htmlFor="" className={s.label}>
          Currencies
        </label>{' '}
        <select defaultValue="USD" onChange={() => console.log('aaa')}>
          <option selected={false} value="USD" style={{ color: '#1a2b48' }}>
            USD
          </option>
          <option selected={false} value="EUR">
            EUR
          </option>
          <option selected={false} value="AUD">
            AUD
          </option>
        </select>
        <div className={s.img__box}>
          {Icons.map(({ src, id, href }) => (
            <a href={href} target="_blank" rel="noreferrer" key={id}>
              <img src={src} alt="social network logo" />
            </a>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FooterLeft;

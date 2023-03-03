import React, { FC } from 'react';
import s from './SocialIcons.module.scss';
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
interface IProps {
  style?: any;
  imgWidth?: string;
  imgHeight?: string;
}

const SocialIcons: FC<IProps> = ({ style, imgWidth, imgHeight }) => (
  <div className={s.box} style={style}>
    {Icons.map(({ src, id, href }) => (
      <a href={href} target="_blank" rel="noreferrer" key={id}>
        <img
          src={src}
          alt="social network logo"
          style={{
            width: imgWidth,
            height: imgHeight,
          }}
        />
      </a>
    ))}
  </div>
);

export default SocialIcons;

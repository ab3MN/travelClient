import React from 'react';
import s from './AboutSecondBlock.module.scss';
import AboutSecondBlockItems from './AboutSecondBlockItems/AboutSecondBlockItems';

const aboutList = [
  {
    title: 'Continuity Of Quality',
    description:
      'Each tour is handcrafted by our team after months (sometimes years!) of in-country research. We carefully select each activity,transportation, accommodation, and included meal option to ensure aconsistent level of quality on each tour.',
    img: './img/AboutPage/SecondBlock/1.png',
    alt: 'happyTourists',
    id: '1',
  },
  {
    title: 'Clean, Cushy Accommodation',
    description:
      'Accommodation makes or breaks a trip! You have access to a hotel pool or a beach nearby most days on tour. Most nights, you share a room with just one other group member. The select dorm-style options included are ultra-comfy, extra clean, and uber-unique.',
    img: './img/AboutPage/SecondBlock/2.png',
    alt: 'happyTourists',
    id: '2',
    styleFirstItem: { order: 2 },
    styleSecondItem: { order: 1 },
  },
];

const AboutSecondBlock = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <ul>
          {' '}
          {aboutList.map(
            ({
              title,
              description,
              img,
              alt,
              id,
              styleFirstItem,
              styleSecondItem,
            }) => (
              <li key={id}>
                <AboutSecondBlockItems
                  title={title}
                  description={description}
                  img={img}
                  alt={alt}
                  styleFirstItem={styleFirstItem}
                  styleSecondItem={styleSecondItem}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default AboutSecondBlock;

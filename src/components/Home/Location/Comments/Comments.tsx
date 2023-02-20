import React, { FC } from 'react';
import s from './Comments.module.scss';
import CommentsLeft from './CommentsLeft/CommentsLeft';
import CommentsRight from './CommentsRight/CommentsRight';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface IComments {
  img: string;
  alt: string;
  text: string;
  author: string;
  description: string;
  stars: number;
  id: number;
}
interface IProps {
  data: IComments[];
}

const Comments: FC<IProps> = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
    >
      {data.map(({ text, alt, id, author, description, stars, img }) => (
        <SwiperSlide key={id}>
          {' '}
          <article className={s.artcile}>
            <CommentsLeft
              text={text}
              author={author}
              description={description}
              stars={stars}
            />
            <CommentsRight img={img} alt={alt} />
          </article>{' '}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Comments;

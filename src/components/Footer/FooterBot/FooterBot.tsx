import React from 'react';
import s from './FooterBot.module.scss';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterRight from './FooterRight/FooterRight';

const FooterBot = () => {
  return (
    <article className={s.bottom}>
      <div className={s.container}>
        <FooterLeft />
        <FooterRight />
      </div>
      <div className={s.footer}>
        <p>
          Business Number: <span>+ 12 43223354</span>
          <br />
          3131 Doctors Drive. Los Angeles, California
          <br />
          Complaints/Enquiries: (Email) solo@traveler.com
        </p>

        <p>
          © 2023 Solo <span>– Shinetheme</span>{' '}
        </p>
      </div>
    </article>
  );
};

export default FooterBot;

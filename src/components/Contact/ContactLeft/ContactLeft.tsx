import React from 'react';
import SocialIcons from '../../../shared/SocialIcons/SocialIcons';
import s from './ContactLeft.module.scss';

const ContactLeft = () => {
  return (
    <section className={s.section}>
      <p className={s.description}>
        <strong>
          If you have an inquiry or would like more information about any of our
          tours, please use the contact form below! We will get back to you
          within 24 hours.
        </strong>
      </p>
      <p className={s.phone}>
        Phone: <span> + 12 43223354</span>
      </p>{' '}
      <p className={s.email}>
        Mail: <span>solo@traveler.com</span>
      </p>
      <SocialIcons style={{ margin: '0px 10px' }} />
    </section>
  );
};

export default ContactLeft;

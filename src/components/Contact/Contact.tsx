import React from 'react';
import PageHeader from '../../shared/PageHeader/PageHeader';
import ContactLeft from './ContactLeft/ContactLeft';
import ContactRight from './ContactRight/ContactRight';
import s from './Contact.module.scss';

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Feel Free to Contact Us"
        backGroundImg="/img/ContactPage/header__bgc.png"
      />
      <main className={s.main}>
        <ContactLeft />
        <ContactRight />
      </main>
    </>
  );
};

export default Contact;

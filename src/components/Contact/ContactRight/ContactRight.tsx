import React from 'react';
import PressButton from '../../../shared/Buttons/PressButton/PressButton';
import MyInput from '../../../shared/Inputs/MyInput';
import s from './ContactRight.module.scss';
import emailjs from '@emailjs/browser';

const inputStyle = {
  backgroundColor: '#26a68c',
  border: 'none',
  width: '432px',
  height: '30px',
  marginBottom: '16px',
};

const ContactRight = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'gmail',
        'template_vm32oki',
        {
          name: `Name: ${name}`,
          email: `Email: ${email}`,
          message: `Message: ${message}`,
        },
        'nmUX5WvqZvX_ZbT9S',
      );
    } catch (e) {
      console.log(e);
    }
    reset();
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <section className={s.section}>
      {' '}
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <MyInput
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          setState={setName}
          style={inputStyle}
        />{' '}
        <MyInput
          type="email"
          placeholder="Your Email Adress"
          name="name"
          value={email}
          setState={setEmail}
          style={inputStyle}
        />{' '}
        <textarea
          className={s.area}
          placeholder="Your Message"
          name="text"
          value={message}
          onChange={handleChangeText}
        ></textarea>
        <PressButton
          name="Send"
          type="submit"
          style={{
            width: '300px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        />
      </form>
    </section>
  );
};

export default ContactRight;

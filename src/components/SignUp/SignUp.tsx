import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from '../../shared/Buttons/GoogleButton/GoogleButton';
import s from './SignUp.module.scss';
import authContext from '../AppBar.contex';
import { userValidation } from '../../helpers/userValidation';
import MessageInformer from '../../shared/MessageInformer/MessageInformer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { userSignUp } from '../../redux/users/userServices';
import MyInput from '../../shared/Inputs/MyInput';
import SubmitButton from '../../shared/Buttons/SubmitButton/SubmitButton';
import FormTitle from '../../shared/titles/FormTitle/FormTitle';
import LinkButton from '../../shared/Buttons/LinkButton/LinkButton';
import AuthForm from '../../shared/Form/AuthForm';
import FormSection from '../../shared/FormSection/FormSection';

const SignUp = () => {
  /* ==================== LogIn SignUp Controller ==================== */
  const { setLogInOpen, setSignUpOpen } = React.useContext(authContext);
  const handleLoginOpen = () => {
    setSignUpOpen(false);
    setLogInOpen(true);
  };

  /* ==================== User Controller ==================== */
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = React.useState('');

  const dispatch = useAppDispatch();

  const [isAgreeWithRules, setIsAgreeWithRules] =
    React.useState<boolean>(false);

  const clearUserState = () => {
    setName('');
    setFullName('');
    setEmail('');
    setPassword('');
    setIsAgreeWithRules(false);
    setMessage('');
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAgreeWithRules)
      return setMessage('You need to read and accept Terms and Privacy Policy');

    const _message = userValidation(email, password);
    if (_message.length > 0) return setMessage(_message);

    clearUserState();
    dispatch(userSignUp({ email, password, name, fullName }));
    setLogInOpen(false);
  };

  return (
    <FormSection>
      <FormTitle text="Sign Up" />
      <GoogleButton />
      <AuthForm onSubmit={handleSubmit}>
        <label className={s.label}>Or</label>
        <MyInput
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          setState={setName}
        />{' '}
        <MyInput
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={fullName}
          setState={setFullName}
        />{' '}
        <MyInput
          type="email"
          placeholder="Email*"
          name="email"
          value={email}
          setState={setEmail}
        />{' '}
        <MyInput
          type="text"
          placeholder="Password*"
          name="password"
          value={password}
          setState={setPassword}
        />
        <div className={s.checkbox__box}>
          <input
            type="checkbox"
            className={s.checkbox}
            onChange={() => setIsAgreeWithRules(true)}
          />
          <p>
            <span className={s.checkbox__label}>
              I have read and accept the
            </span>
            <Link to="/" className={s.checkbox__link}>
              Terms and Privacy Policy
            </Link>
          </p>
        </div>
        <SubmitButton text="SIGN UP" />
        <div className={s.login__link}>
          Already have an account?
          <LinkButton text="Log In" callback={handleLoginOpen} />
        </div>
      </AuthForm>

      {message.length > 0 && <MessageInformer message={message} />}
    </FormSection>
  );
};

export default SignUp;

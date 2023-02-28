import React from 'react';
import GoogleButton from '../../shared/Buttons/GoogleButton/GoogleButton';
import authContext from '../AppBar.contex';
import s from './Login.module.scss';
import { userValidation } from '../../helpers/userValidation';
import MessageInformer from '../../shared/MessageInformer/MessageInformer';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { userLogIn } from '../../redux/users/userServices';
import MyInput from '../../shared/Inputs/MyInput';
import SubmitButton from '../../shared/Buttons/SubmitButton/SubmitButton';
import LinkButton from '../../shared/Buttons/LinkButton/LinkButton';
import FormTitle from '../../shared/titles/FormTitle/FormTitle';
import AuthForm from '../../shared/Form/AuthForm';
import FormSection from '../../shared/FormSection/FormSection';

const Login = () => {
  /* ==================== LogIn SignUp Controller ==================== */
  const { setLogInOpen, setSignUpOpen } = React.useContext(authContext);
  const handleSignUpOpen = () => {
    setLogInOpen(false);
    setSignUpOpen(true);
  };

  /* ==================== User Controller ==================== */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [saveUserData, setSaveUserData] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState('');

  const dispatch = useAppDispatch();

  const clearState = () => {
    setEmail('');
    setPassword('');
    setMessage('');
    setSaveUserData(false);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const _message = userValidation(email, password);
    if (_message.length > 0) return setMessage(_message);

    saveUserData === true ? console.log('remember') : clearState();
    dispatch(userLogIn({ email, password }));
    setLogInOpen(false);
  };

  return (
    <FormSection>
      <FormTitle text="Log In" />
      <p className={s.description}>
        Log in to add new things to your wishlist and access your any device
      </p>
      <GoogleButton />
      <AuthForm onSubmit={handleSubmit}>
        <label className={s.label}>Or</label>
        <MyInput
          type="email"
          name="email"
          value={email}
          placeholder="Email*"
          setState={setEmail}
        />{' '}
        <MyInput
          type="text"
          name="password"
          value={password}
          placeholder="Password*"
          setState={setPassword}
        />
        <div className={s.checkbox__box}>
          <label className={s.checkbox__label}>
            <input type="checkbox" onChange={() => setSaveUserData(true)} />{' '}
            Remember me
          </label>
          <LinkButton text="Forgot Password?" callback={handleSignUpOpen} />
        </div>
        <SubmitButton text="Login" />
        <div className={s.link__box}>
          New here?{' '}
          <LinkButton text="Create an Account" callback={handleSignUpOpen} />
        </div>
      </AuthForm>
      {message.length > 0 && <MessageInformer message={message} />}
    </FormSection>
  );
};

export default Login;

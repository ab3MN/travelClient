import React from 'react';
import Nav from './Nav/Nav';
import s from './AppBar.module.scss';
import Modal from '../shared/Modal/Modal';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import authContext from './AppBar.contex';

const AppBar = () => {
  const [isLogInOpen, setLogInOpen] = React.useState(false);
  const [isSignUpOpen, setSignUpOpen] = React.useState(false);

  return (
    <>
      <authContext.Provider
        value={{ isLogInOpen, setLogInOpen, isSignUpOpen, setSignUpOpen }}
      >
        <header className={s.header}>
          <Nav />
        </header>{' '}
      </authContext.Provider>

      {isLogInOpen && (
        <Modal
          onClose={() => setLogInOpen(false)}
          style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        >
          <authContext.Provider
            value={{ isLogInOpen, setLogInOpen, isSignUpOpen, setSignUpOpen }}
          >
            <Login />
          </authContext.Provider>
        </Modal>
      )}
      {isSignUpOpen && (
        <Modal
          onClose={() => setSignUpOpen(false)}
          style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        >
          <authContext.Provider
            value={{ isLogInOpen, setLogInOpen, isSignUpOpen, setSignUpOpen }}
          >
            <SignUp />{' '}
          </authContext.Provider>
        </Modal>
      )}
    </>
  );
};

export default AppBar;

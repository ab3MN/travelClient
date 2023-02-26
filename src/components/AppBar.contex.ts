import React from 'react';
type IContextProps = {
  isLogInOpen: boolean;
  isSignUpOpen: boolean;
  setLogInOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const authContext = React.createContext<IContextProps>({
  isLogInOpen: false,
  setLogInOpen: () => {},
  isSignUpOpen: false,
  setSignUpOpen: () => {},
});

export default authContext;

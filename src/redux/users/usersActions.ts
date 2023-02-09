export interface IUser {
  password: string;
  email: string;
  subscription: string;
  isActivated: boolean;
  role: string;
  smallAvatarURL: string;
  largeAvatarURL: string;
}

export interface IUserWithToken extends IUser {
  refreshToken: string;
}
export enum USER_TYPES {
  SIGN_UP_USER_START = 'SIGN_UP_USER_START',
  SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS',
  SIGN_UP_USER_ERROR = 'SIGN_UP_USER_ERROR',

  LOGIN_USER_START = 'LOGIN_USER_START',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',

  AUTH_USER_START = 'AUTH_USER_START',
  AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
  AUTH_USER_ERROR = 'AUTH_USER_ERROR',

  USER_LOGOUT = 'USER_LOGOUT',
}
export interface ISignUpUserStart {
  type: USER_TYPES.SIGN_UP_USER_START;
}
export interface ISignUpUserSuccess {
  type: USER_TYPES.SIGN_UP_USER_SUCCESS;
  payload: { user: IUserWithToken };
}
export interface ISignUpUserError {
  type: USER_TYPES.SIGN_UP_USER_ERROR;
  payload: { error: any };
}
export interface ILoginUserStart {
  type: USER_TYPES.LOGIN_USER_START;
}
export interface ILoginUserSuccess {
  type: USER_TYPES.LOGIN_USER_SUCCESS;
  payload: { user: IUserWithToken };
}
export interface ILoginUserError {
  type: USER_TYPES.LOGIN_USER_ERROR;
  payload: { error: any };
}
export interface IAuthUserStart {
  type: USER_TYPES.AUTH_USER_START;
}
export interface IAuthUserSuccess {
  type: USER_TYPES.AUTH_USER_SUCCESS;
  payload: { user: IUser };
}
export interface IAuthUserError {
  type: USER_TYPES.AUTH_USER_ERROR;
  payload: { error: any };
}

export interface IUserLogOut {
  type: USER_TYPES.USER_LOGOUT;
  payload: false | null;
}

export type signUpUserType =
  | ISignUpUserStart
  | ISignUpUserSuccess
  | ISignUpUserError;

export type loginUserType =
  | ILoginUserStart
  | ILoginUserSuccess
  | ILoginUserError;

export type authUserType = IAuthUserStart | IAuthUserSuccess | IAuthUserError;

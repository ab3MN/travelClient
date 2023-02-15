export interface IUser {
  email: string;
  id: string;
  avatar: string;
}

export interface IUserWithToken {
  user: IUser;
  refreshToken: string;
}

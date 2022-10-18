export type PasswordType = {
  showPassword?: boolean;
  showConfirmPassword?: boolean;
};

export type UserContextType = {
  token?: string;
  created?: boolean;
  refresh_token?: string;
};

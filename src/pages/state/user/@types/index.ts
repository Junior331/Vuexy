import { ReactElement } from "react";

export type State = {
  toke?: string;
  created?: boolean;
  refresh_token?: string;
};

export type UserProviderType = {
  children: ReactElement | ReactElement[];
};

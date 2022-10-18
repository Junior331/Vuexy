/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useMemo, useReducer } from 'react';
import { UserProviderType } from './@types';
import userReducer from './reducer';

const initialState: any = {
  user: {
    email: '',
    nickname: '',
    phone: '',
    entityId: '',
    birthday: '',
    initialPurchase: 0
  }
};

export const UserContext = createContext(initialState);

const UserProvider: React.FC<UserProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const provider = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

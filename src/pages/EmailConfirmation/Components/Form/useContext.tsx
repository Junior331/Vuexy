import { createContext, ReactNode, useMemo, useState } from 'react';
import { UserContextType } from './@types';

type ContentPropsType = {
  userActive: UserContextType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserActive: (c: any) => void;
};

export const UserContext = createContext<ContentPropsType>(
  {} as ContentPropsType
);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [userActive, setUserActive] = useState<UserContextType>(
    {} as UserContextType
  );
  const value = useMemo(
    () => ({ userActive, setUserActive }),
    [userActive, setUserActive]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

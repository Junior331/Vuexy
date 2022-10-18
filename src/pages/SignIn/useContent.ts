import { useContext } from 'react';
import { UserContext } from './useContext';

function useContentUserActive() {
  const { userActive, setUserActive } = useContext(UserContext);

  return {
    userActive,
    setUserActive
  };
}

export { useContentUserActive };

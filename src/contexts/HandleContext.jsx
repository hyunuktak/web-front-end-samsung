import { createContext, useContext } from 'react';

const HandleContext = createContext();

export const HandleProvider = ({ value, children }) => {
  return <HandleContext.Provider value={value}>{children}</HandleContext.Provider>;
}

export const useHandle = () => {
    const value = useContext(HandleContext);
    if (value === undefined) {
      throw new Error('useContext Error');
    }
    return value;
}
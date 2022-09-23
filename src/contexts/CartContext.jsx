import { createContext, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    const value = useContext(CartContext);
    if (value === undefined) {
      throw new Error('useContext Error');
    }
    return value;
}
import { createContext, useState, useContext } from 'react';

export const BurgerMenuContext = createContext();

export const BurgerMenuProvider = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isBurgerIconHovered, setIsBurgerIconHovered] = useState(false);

  const handleBurgerToggle = () => {
    setIsBurgerOpen((prevState) => !prevState);
  };

  const handleBurgerIconHover = () => {
    setIsBurgerIconHovered(true);
  }

  const handleBurgerIconLeave = () => {
    setIsBurgerIconHovered(false);
  }

  return (
    <BurgerMenuContext.Provider value={{ isBurgerOpen, handleBurgerToggle, isBurgerIconHovered, handleBurgerIconHover, handleBurgerIconLeave }}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

export const useBurgerMenu = () => {
  const context = useContext(BurgerMenuContext);
  if (context === undefined) {
    throw new Error(
      'useBurgerMenu must be used within a BurgerMenuProvider'
    );
  }
  return context;
};
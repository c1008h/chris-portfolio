import React, { useReducer, useEffect } from 'react';

export const NavbarContext = React.createContext();

const navbarReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return { isNavbarVisible: true };
    case 'HIDE':
      return { isNavbarVisible: false };
    default:
      return state;
  }
};

export const NavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navbarReducer, { isNavbarVisible: false });

  useEffect(() => {
    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
      
        if (aboutSection && window.pageYOffset > aboutSection.offsetTop) {
          dispatch({ type: 'SHOW' });
        } else {
          dispatch({ type: 'HIDE' });
        }
      };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavbarContext.Provider>
  );
};
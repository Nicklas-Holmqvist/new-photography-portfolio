import React, {
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from 'react';

export const HeaderContext = createContext<Context>(undefined!);

type Context = {
  activeLink: string;
  handleActiveLink: (e: any) => void;
};

export const HeaderProvider: FunctionComponent = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleActiveLink = (e: any) => {
    setActiveLink(e);
  };

  return (
    <HeaderContext.Provider
      value={{
        activeLink,
        handleActiveLink,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext<Context>(HeaderContext);

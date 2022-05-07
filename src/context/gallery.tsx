import React, {
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from 'react';

import { gallery } from '../components/utils/images';

export const HeaderContext = createContext<Context>(undefined!);

type Context = {
  activeLink: string;
  noGallery: boolean;
  handleActiveLink: (e: any) => void;
};

export const HeaderProvider: FunctionComponent = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [noGallery, setNoGallery] = useState<boolean>(false);

  const handleActiveLink = (e: any) => {
    const findGallery = gallery.find((item) => item.gallery === e);
    setActiveLink(e);
    if (findGallery !== undefined) {
      setNoGallery(false);
      return;
    } else return setNoGallery(true);
  };

  return (
    <HeaderContext.Provider
      value={{
        noGallery,
        activeLink,
        handleActiveLink,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext<Context>(HeaderContext);

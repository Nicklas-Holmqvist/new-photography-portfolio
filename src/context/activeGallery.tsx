import React, {
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from 'react';

export const ActiveGalleryContext = createContext<Context>(undefined!);

type Context = {
  activeLink: string;
  noGallery: boolean;
  handleActiveLink: (e: any) => void;
};

export const ActiveGalleryProvider: FunctionComponent = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [noGallery, setNoGallery] = useState<boolean>(false);

  const handleActiveLink = (galleryName: string) => {
    console.log(galleryName);
    setActiveLink(galleryName);
    if (galleryName !== '') {
      setNoGallery(false);
      return;
    } else return setNoGallery(true);
  };

  return (
    <ActiveGalleryContext.Provider
      value={{
        noGallery,
        activeLink,
        handleActiveLink,
      }}
    >
      {children}
    </ActiveGalleryContext.Provider>
  );
};

export const useActiveGalleryContext = () =>
  useContext<Context>(ActiveGalleryContext);

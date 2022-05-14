import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE as string,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN as string,
  });

  return { client };
};

export default useContentful;

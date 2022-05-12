import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'mae9ysibqeni',
    accessToken: '-RPJ0yHenKC7jm9vjpKa730NpHRvXWg3BDeLxE5H_28',
  });

  return { client };
};

export default useContentful;

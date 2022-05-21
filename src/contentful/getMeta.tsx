import contentfulClient from './useContentful';

const getMeta = async () => {
  const { client } = contentfulClient();
  try {
    const entries = await client.getEntries({
      content_type: 'meta',
      select: 'fields',
    });
    const filteredEntries: any[] = entries.items.map((item: any) => {
      return item.fields;
    });
    return filteredEntries;
  } catch (error) {
    console.log('Error', error);
  }
};

export default getMeta;

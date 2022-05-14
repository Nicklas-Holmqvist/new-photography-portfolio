import contentfulClient from './useContentful';

const getMenuItems = async () => {
  const { client } = contentfulClient();
  try {
    const entries = await client.getEntries({
      content_type: 'menuItem',
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

export default getMenuItems;

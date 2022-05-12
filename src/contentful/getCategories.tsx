import { ICategory } from '../types';
import contentfulClient from './useContentful';

const getCategories = async () => {
  const { client } = contentfulClient();
  try {
    const entries = await client.getEntries({
      content_type: 'category',
      select: 'fields',
    });

    const filteredEntries: ICategory[] = entries.items.map((item: any) => {
      const categoryImage = item.fields.categoryImage.fields;

      return {
        ...item.fields,
        categoryImage,
      };
    });
    return filteredEntries;
  } catch (error) {
    console.log('Error', error);
  }
};

export default getCategories;

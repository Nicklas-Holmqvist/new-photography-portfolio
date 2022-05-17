import React, { useEffect, useState } from 'react';
import { ICategory } from '../types';
import contentfulClient from './useContentful';

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>();

  const fetchCategories = async () => {
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
      return setCategories(filteredEntries);
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categories;
};

export default useCategories;

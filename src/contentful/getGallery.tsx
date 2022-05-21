import contentfulClient from './useContentful';

const getGallery = async (gallery: string) => {
  const { client } = contentfulClient();
  try {
    const entries = await client.getEntries({
      content_type: 'gallery',
      select: 'fields',
      'fields.path': gallery,
    });
    const filteredEntries: any[] = entries.items.map((item: any) => {
      const galleryImages = item.fields.image.map((image: any) => {
        return image.fields;
      });

      return {
        title: item.fields.title,
        path: item.fields.path,
        meta: item.fields.meta.fields,
        galleryImages,
      };
    });
    return filteredEntries;
  } catch (error) {
    console.log('Error', error);
  }
};

export default getGallery;

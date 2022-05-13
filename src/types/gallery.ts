export interface IGallery1 {
  title: string;
  gallery: {
    file: {
      url: string;
    };
  };
}

export interface IGallery {
  id: number;
  imagePath: string;
  imageAlt: string;
  gallery: string;
}

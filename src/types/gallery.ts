export interface IGallery {
  title: string;
  galleryImages: IGalleryImage[];
}

export interface IGalleryImage {
  title: string;
  path: string;
  meta: IMeta;
  file: {
    contentType: string;
    details: IImageDetails;
    fileName: string;
    url: string;
  };
}

export interface IImageDetails {
  image: {
    width: number;
    height: number;
  };
  size: number;
}

export interface IMeta {
  content: string;
  title: string;
}

export interface ICategory {
  title: string;
  description: string;
  reverseView: boolean;
  path: string;
  showBtn: boolean;
  categoryImage: {
    file: {
      url: string;
    };
  };
}

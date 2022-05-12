export interface ICategory {
  title: string;
  description: string;
  reverseView: boolean;
  anchor: string;
  showBtn: boolean;
  categoryImage: {
    file: {
      url: string;
    };
  };
}

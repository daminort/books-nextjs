interface BookItem {
  title: string;
  subtitle: string;
  isbn13: string;
  price: number;
  image: string;
  url: string;
}

interface Book extends BookItem {
  authors: string;
  publisher: string;
  pages: number;
  year: number;
  rating: number;
  desc: string;
}

export type {
  BookItem,
  Book,
}

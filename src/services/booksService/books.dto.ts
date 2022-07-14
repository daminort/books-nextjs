import { BookItem, Book } from 'interfaces/books.interface';

interface BookItemResponse extends Omit<BookItem, 'price'> {
  price: string;
}

interface BookResponse extends Omit<Book, 'price' | 'pages' | 'year' | 'rating'> {
  price: string;
  pages: string;
  year: string;
  rating: string;
}

interface SearchResponse {
  total: number;
  page: number;
  books: BookItemResponse[];
}

interface EntityResponse extends BookResponse {};

export type {
  SearchResponse,
  BookItemResponse,
  EntityResponse,
}

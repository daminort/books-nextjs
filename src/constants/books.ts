import { Book } from 'interfaces/books.interface';

const EMPTY_BOOK: Book = {
  title: 'No Book',
  desc: 'It seems you have requested a book that does not exist',
  isbn13: '',
  url: '',
  image: '/images/no-book.jpg',
  rating: 0,
  year: 0,
  pages: 0,
  price: 0,
  authors: '',
  publisher: '',
  subtitle: '',
};

export {
  EMPTY_BOOK,
}

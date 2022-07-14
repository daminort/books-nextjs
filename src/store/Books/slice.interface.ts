import { Book } from 'interfaces/books.interface';
import { Category } from 'constants/categories';

export interface BooksState {
  list: Book[];
  category: Category;
}

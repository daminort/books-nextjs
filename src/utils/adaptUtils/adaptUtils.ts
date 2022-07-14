import { BookItem, Book } from 'interfaces/books.interface';
import { BookItemResponse, EntityResponse } from 'services/booksService/books.dto';

function normalizeBookItems(list: BookItemResponse[]): BookItem[] {

  return list.map(item => {
    const res = {
      ...item,
      price: Number(item.price.replace('$', '')),
    } as unknown as BookItem;

    return res;
  });
}

function normalizeBook(entity: EntityResponse): Book {

  const { price, pages, year, rating } = entity;

  const res = {
    ...entity,
    price: Number(price.replace('$', '')),
    pages: Number(pages),
    year: Number(year),
    rating: Number(rating),
  } as unknown as Book;

  return res;
}

const adaptUtils = {
  normalizeBookItems,
  normalizeBook,
};

export {
  adaptUtils,
}

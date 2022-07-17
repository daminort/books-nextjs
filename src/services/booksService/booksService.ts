import axios from 'axios';

import { config } from 'config';
import { BookItem, Book } from 'interfaces/books.interface';
import { adaptUtils } from 'utils/adaptUtils';
import { axiosUtils } from 'utils/axiosUtils';
import { SearchResponse, EntityResponse } from './books.dto';

async function getBooksList(category: string): Promise<BookItem[]> {
  const url = `${config.apiURL}/search/${category}`;

  try {
    const result = await axios.get<SearchResponse>(url);
    const list = result?.data.books || [];

    return adaptUtils.normalizeBookItems(list);

  } catch (e: any) {
    axiosUtils.processError(e);
    return [];
  }
}

async function getBook(isbn: string): Promise<Book | null> {
  const url = `${config.apiURL}/books/${isbn}`;

  try {
    const result = await axios.get<EntityResponse>(url);
    const book = result?.data;

    return adaptUtils.normalizeBook(book);

  } catch (e: any) {
    axiosUtils.processError(e);
    return null;
  }
}

const booksService = {
  getBooksList,
  getBook,
};

export {
  booksService,
}

import type { NextPage, NextPageContext } from 'next';

import { BookItem } from 'interfaces/books.interface';
import { BooksList } from 'containers/BooksList';
import { Category } from 'constants/categories';
import { booksService } from 'services/booksService';

interface PageProps {
  list: BookItem[];
};

const List: NextPage<PageProps> = ({ list }) => {
  return (
    <BooksList list={list} />
  )
}

async function getServerSideProps(context: NextPageContext) {

  const { category } = context.query;
  const list: BookItem[] = await booksService.getBooksList((category as Category));

  return {
    props: {
      list,
    }
  };
};

export default List;
export {
  getServerSideProps,
}

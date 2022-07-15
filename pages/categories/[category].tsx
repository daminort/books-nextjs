import type { NextPage, NextPageContext } from 'next';

import { BookItem } from 'interfaces/books.interface';
import { Head } from 'components/Head';
import { BooksList } from 'containers/BooksList';
import { Category } from 'constants/categories';
import { booksService } from 'services/booksService';

interface PageProps {
  list: BookItem[];
  category: Category;
};

const Page: NextPage<PageProps> = ({ list, category }) => {
  return (
    <>
      <Head
        title={`Books: ${category}`}
        description={`Books list for the category ${category}`}
      />
      <BooksList list={list} />
    </>
  );
}

async function getServerSideProps(context: NextPageContext) {

  const { category } = context.query;
  const list: BookItem[] = await booksService.getBooksList((category as Category));

  return {
    props: {
      list,
      category,
    }
  };
};

export default Page;
export {
  getServerSideProps,
}

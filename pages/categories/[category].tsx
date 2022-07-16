import type { NextPage, NextPageContext } from 'next';

import { BookItem } from 'interfaces/books.interface';
import { Head } from 'components/Head';
import { BooksList } from 'containers/BooksList';
import { Sidebar } from 'containers/Sidebar';
import { Category } from 'constants/categories';
import { booksService } from 'services/booksService';

import s from './Category.module.css';

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
      <div className={s.container}>
        <main className={s.main}>
          <Sidebar />
          <BooksList list={list} />
        </main>
      </div>
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

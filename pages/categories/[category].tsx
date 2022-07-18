import type { NextPage, NextPageContext } from 'next';

import { BookItem } from 'interfaces/books.interface';
import { Head } from 'components/Head';
import { BooksList } from 'containers/BooksList';
import { Sidebar } from 'containers/Sidebar';
import { booksService } from 'services/booksService';

import s from './Category.module.css';

interface PageProps {
  list: BookItem[];
  category: string;
};

const Page: NextPage<PageProps> = ({ list, category }) => {
  return (
    <>
      <Head
        title={`Books: ${category}`}
        description={`Books list for the category ${category}`}
      />
      <main className={s.grid}>
        <div className={s.sidebar}>
          <Sidebar />
        </div>
        <div className={s.list}>
          <BooksList list={list} />
        </div>
      </main>
    </>
  );
}

async function getServerSideProps(context: NextPageContext) {

  const { category } = context.query;
  const list: BookItem[] = await booksService.getBooksList((category as string));

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

import type { NextPage, NextPageContext } from 'next';

import { EMPTY_BOOK } from 'constants/books';
import { Book } from 'interfaces/books.interface';
import { Head } from 'components/Head';
import { booksService } from 'services/booksService';
import { BookInfo } from 'containers/BookInfo';

interface PageProps {
  book: Book;
};

const Page: NextPage<PageProps> = ({ book }) => {

  if (!book) {
    return (
      <>
        <Head
          title={EMPTY_BOOK.title}
          description={EMPTY_BOOK.desc}
        />
        <BookInfo book={EMPTY_BOOK} />
      </>
    );
  }

  return (
    <>
      <Head
        title={book.title}
        description={book.desc}
      />
      <BookInfo book={book} />
    </>
  );
}

async function getServerSideProps(context: NextPageContext) {

  const { isbn } = context.query;
  const book = await booksService.getBook((isbn as string));

  return {
    props: {
      book,
    }
  };
};

export default Page;
export {
  getServerSideProps,
}

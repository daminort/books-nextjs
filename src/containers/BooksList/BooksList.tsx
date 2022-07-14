import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { BooksListProps } from './BooksList.props';
import styles from './BooksList.module.css';

const BooksList: NextPage<BooksListProps> = ({ list }) => {

  const router = useRouter();
  const { category } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Books: ${category}`}</title>
        <meta name="description" content={`Books list for the category ${category}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Books list for the category {category}
        </h1>

        <ol>
          {list.map(item => {
            const { title, url } = item;
            return (
              <li key={item.url}>
                <a href={url}>{title}</a>
              </li>
            )
          })}
        </ol>
      </main>
    </div>
  )
}

export {
  BooksList
}

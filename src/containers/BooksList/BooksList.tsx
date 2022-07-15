import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { Card } from 'components/Card';
import { BooksListProps } from './BooksList.props';
import s from './BooksList.module.css';

const BooksList: NextPage<BooksListProps> = ({ list }) => {

  const router = useRouter();
  const { category } = router.query;

  return (
    <div className={s.container}>
      <main className={s.main}>
        <h3 className={s.title}>
          Books list for the category <span>{category}</span>
        </h3>

        <div className={s.grid}>
          {list.map(item => {
            const { title, image, isbn13 } = item;
            return (
              <Card
                key={isbn13}
                title={title}
                image={image}
                isbn={isbn13}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export {
  BooksList
}

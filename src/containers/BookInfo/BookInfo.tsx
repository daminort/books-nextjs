import { FC, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Button } from 'components/Button';
import { BookInfoProps } from './BookInfo.props';
import s from './BookInfo.module.css';

const BookInfo: FC<BookInfoProps> = ({ book }) => {

  const router = useRouter();

  const onClickBack = useCallback(() => {
    router.back();
  }, [router]);

  const { title, subtitle, image, desc } = book;

  const details = [
    { label: 'Authors', value: book.authors },
    { label: 'Publisher', value: book.publisher },
    { label: 'ISBN', value: book.isbn13 },
    { label: 'Year', value: book.year },
    { label: 'Pages', value: book.pages },
    { label: 'Price', value: `$ ${book.price}` },
    { label: 'Rating', value: book.rating },
  ];

  return (
    <div className={s.container}>
      <main className={s.main}>
        <div className={s.header}>
          <h3 className={s.title}>{title}</h3>
          {subtitle && (
            <div className={s.subtitle}>{subtitle}</div>
          )}
        </div>
        <div className={s.content}>
          <img
            className={s.cover}
            src={image}
            alt={title}
          />
          <div className={s.details}>
            <div className={s.rows}>
              {details.map(item => {
                const { label, value } = item;
                return (
                  <div key={label} className={s.row}>
                    <span className={s.label}>{label}</span>
                    <span className={s.value}>{value}</span>
                  </div>
                );
              })}
            </div>
            <div className={s.annotation}>Annotation</div>
            <div className={s.description}>{desc}</div>
          </div>
        </div>
        <div className={s.footer}>
          <Button
            caption="Return back"
            icon="chevronsLeft"
            onClick={onClickBack}
          />
        </div>
      </main>
    </div>
  );
};

export { BookInfo };

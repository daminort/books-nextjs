import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CardProps } from './Card.props';
import s from './Card.module.css';

const Card: FC<CardProps> = ({ title, isbn, image }) => {

  const url = `/books/${isbn}`;

  return (
    <Link href={url}>
      <div className={s.card}>
        <Image
          src={image}
          width="200"
          height="250"
          layout="responsive"
          placeholder="blur"
          blurDataURL={image}
        />
        <div className={s.title}>{title}</div>
      </div>
    </Link>
  );
};

export { Card };

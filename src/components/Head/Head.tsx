import { FC } from 'react';
import NextHead from 'next/head';

import { HeadProps } from './Head.props';

const Head: FC<HeadProps> = ({ title, description }) => {

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export { Head };

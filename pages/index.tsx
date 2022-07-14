import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';

const Home: NextPage = () => {

  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push('/categories/react');
    }
  });

  return null;
}

export default Home;

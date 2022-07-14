import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store';

const list = (state: RootState) => state.Books.list;
const category = (state: RootState) => state.Books.category;

const getList = createSelector(
  [list],
  (list) => list,
);

const getCategory = createSelector(
  [category],
  (category) => category,
);

const selectors = {
  getList,
  getCategory,
}

export {
  selectors,
}

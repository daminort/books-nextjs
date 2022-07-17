import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'store';

const list = (state: RootState) => state.Recent.list;

const getList = createSelector(
  [list],
  (list) => list,
);

const selectors = {
  getList,
}

export {
  selectors,
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Book } from 'interfaces/books.interface';
import { Category } from 'constants/categories';

import { initialState } from './slice.init';

const slice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    listRefresh: (state, action: PayloadAction<Book[]>) => {
      state.list = action.payload;
    },
    categoryRefresh: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
  }
})

export {
  slice,
}

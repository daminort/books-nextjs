import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './slice.init';

const slice = createSlice({
  name: 'Recent',
  initialState,
  reducers: {
    categoryAdd: (state, action: PayloadAction<string>) => {
      state.list.unshift(action.payload);
      const res = state.list.slice(0, 10);
      state.list = res;
    },
  }
})

export {
  slice,
}

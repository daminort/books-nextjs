import { slice } from './slice';
import { selectors as booksSelectors } from './selectors';

const booksReducer = slice.reducer;
const booksActions = slice.actions;

export {
  booksActions,
  booksReducer,
  booksSelectors,
}

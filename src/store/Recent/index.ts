import { slice } from './slice';
import { selectors as recentSelectors } from './selectors';

const recentActions = slice.actions;
const recentReducer = slice.reducer;

export {
  recentActions,
  recentReducer,
  recentSelectors,
}

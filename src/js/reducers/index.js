import { movieReducer } from './MovieReducer';
import { filterReducer } from './FilterReducer';
import { searchFormReducer } from './SearchFormReducer';

export const reducer = {
  results: movieReducer,
  filters: filterReducer,
  search: searchFormReducer,
};

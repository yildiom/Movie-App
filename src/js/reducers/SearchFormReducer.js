import { searchState } from '../store/searchState';

export const searchFormReducer = (state = searchState, action) => {
  switch (action.type) {
    case 'Search_Movies':
      return action.payload;
    default:
      return state;
  }
};

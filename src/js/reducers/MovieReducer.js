import { movieState } from '../store/movieState';

export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case 'Set_Movies':
      return [...action.payload];
    default:
      return state;
  }
};

import { filterState } from '../store/filterState';

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'FILTER_MOVIE':
      return {
        ...state,
        movie: action.payload,
      };
    case 'FILTER_POSTER':
      return {
        ...state,
        poster: action.payload,
      };
    case 'FILTER_GAME':
      return {
        ...state,
        game: action.payload,
      };
    case 'FILTER_SERIES':
      return {
        ...state,
        series: action.payload,
      };
    case 'FILTER_EPISODE':
      return {
        ...state,
        episode: action.payload,
      };
    case 'FILTER_YEAR':
      return {
        ...state,
        year: action.payload,
      };

    default:
      return state;
  }
};

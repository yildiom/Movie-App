export const searchMovies = function(searchStr) {
  return {
    type: 'Search_Movies',
    payload: searchStr,
  };
};

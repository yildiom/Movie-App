import axios from 'axios';

export const setMovies = function(movieArr) {
  return {
    type: 'Set_Movies',
    payload: movieArr,
  };
};

export const getMovies = function(movieStr) {
  return function(dispatch) {
    axios
      .get(`http://www.omdbapi.com/?s=${movieStr}&apikey=e0a73ab6`)
      .then(function(response) {
        dispatch(setMovies(response.data.Search));
      });
  };
};

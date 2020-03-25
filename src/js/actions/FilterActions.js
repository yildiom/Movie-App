export const filterPoster = function(posterInfo) {
  return {
    type: 'FILTER_POSTER',
    payload: posterInfo,
  };
};

export const filterMovie = function(typeInfo) {
  return {
    type: 'FILTER_MOVIE',
    payload: typeInfo,
  };
};

export const filterGame = function(gameInfo) {
  return {
    type: 'FILTER_GAME',
    payload: gameInfo,
  };
};

export const filterSeries = function(serieInfo) {
  return {
    type: 'FILTER_SERIES',
    payload: serieInfo,
  };
};

export const filterEpisode = function(episodeInfo) {
  return {
    type: 'FILTER_EPISODE',
    payload: episodeInfo,
  };
};

export const filterYear = function(yearInfo) {
  return {
    type: 'FILTER_YEAR',
    payload: yearInfo,
  };
};

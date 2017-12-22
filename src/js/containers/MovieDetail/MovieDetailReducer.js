import { types } from './MovieDetailAction'

const defaultState = {
 title: '',
 year: '',
 runtime: '',
 genre: '',
 plot: '',
 poster: '',
 awards: '',
 metaScoreRatings: '',
 imdbRatings: '',
  };

  export default function MovieDetailReducer (state = defaultState, action) {
    const { type, payload } = action;
    // the `state = defaultState` above is new ES6 syntax
    // for defining a default value on a parameter
      switch (type) {

      case `${types.MOVIE_DETAIL_INFO}_PENDING`:
      console.log('pending');
      return {
        ...state,
      }
      case `${types.MOVIE_DETAIL_INFO}_FULFILLED`:
      return {
        ...state,
      title: payload.Title,
      year: payload.Year,
      runtime: payload.Runtime,
      genre: payload.Genre,
      poster: payload.Poster,
      plot: payload.Plot,
      awards: payload.Awards,
      metaScoreRatings: payload.Metascore,
      imdbRatings: payload.imdbRating,
      }
  default: {
    return state;
  } 
}
}
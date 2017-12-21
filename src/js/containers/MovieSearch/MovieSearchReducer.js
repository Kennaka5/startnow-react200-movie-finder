import { types } from './MovieSearchAction'

const defaultState = {
results: [],
inputTitle: ''
  };

  export default function MovieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;
    // the `state = defaultState` above is new ES6 syntax
    // for defining a default value on a parameter
      switch (type) {
      
      case types.MOVIE_INPUT: 

      return {
        ...state,
        inputTitle: payload.inputTitle
      }

      case `${types.MOVIE_INFO}_PENDING`:
      console.log('pending');
      return {
        ...state,
      }
      case `${types.MOVIE_INFO}_FULFILLED`:
      return {
        ...state,
      results: payload
      }
  default: {
    return state;
  } 
}
}

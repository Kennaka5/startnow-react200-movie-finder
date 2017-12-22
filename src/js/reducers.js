import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearch/MovieSearchReducer';
import MovieDetailReducer from './containers/MovieDetail/MovieDetailReducer';

const reducers = combineReducers({
  search: MovieSearchReducer,
  detail: MovieDetailReducer
});

export default reducers;
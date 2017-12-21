import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearch/MovieSearchReducer';

const reducers = combineReducers({
  search: MovieSearchReducer
});

export default reducers;
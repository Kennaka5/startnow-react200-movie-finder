import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

function MapStoreToProps(store) {
    return {
     results: store.search.results,
     inputTitle: store.search.inputTitle
    };
  }

export default connect(MapStoreToProps)(MovieDetail);
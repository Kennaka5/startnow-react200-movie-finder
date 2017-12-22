import { connect } from 'react-redux';
import MovieSearch from './MovieSearch';

function MapStoreToProps(store) {
    return {
     results: store.search.results,
     inputTitle: store.search.inputTitle,
     plot: store.detail.plot,
    };
  }

  export default connect(MapStoreToProps)(MovieSearch);
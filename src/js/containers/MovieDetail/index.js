import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';

function MapStoreToProps(store) {
    return {
     results: store.search.results,
     title: store.detail.title,
     year: store.detail.year,
     runtime: store.detail.runtime,
     genre: store.detail.genre,
     plot: store.detail.plot,
     poster: store.detail.poster,
     awards: store.detail.awards,
     metaScoreRatings: store.detail.metaScoreRatings,
     imdbRatings: store.detail.imdbRatings,
    };
  }

export default connect(MapStoreToProps)(MovieDetail);
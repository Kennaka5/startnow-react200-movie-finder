import React from 'react';
import { movieDetailQuery } from "./MovieDetailAction";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    this.props.dispatch(movieDetailQuery(`${this.props.match.params.id}`));
  }

  render() {
    const { title, year, runtime, genre, poster, plot, awards, metaScoreRatings, imdbRatings } = this.props
    console.log('Details', year, poster)
    //console.log(results.find(movie => movie.imdbID === this.props.match.params.id))
    return (
      <div>
        <h1 className="text-center pb-4">Movie Search</h1>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img src={poster} />
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-header">
                  Movie Details
                  </div>
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                  
                      <span className="badge badge-success">Released: {year}</span>
                      <span id="middle" className="badge badge-success">{runtime}</span>
                      <span className="badge badge-success">{genre}</span>

                  <p className="card-text pt-2">{plot}</p>
                  <p>{awards}</p>
                  <div>Metascore: {metaScoreRatings}</div>
                  <div>IMDB: {imdbRatings}</div>
               </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetail;

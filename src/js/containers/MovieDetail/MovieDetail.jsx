import React from 'react';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  renderMovieDetails() {
  const {results} = this.props
  const Movie = results.find((movie => movie.imdbID === this.props.match.params.id)
  )
  return <div>{Movie.Title}</div>
}

  render() {
    const {results} = this.props
    //console.log(results.find(movie => movie.imdbID === this.props.match.params.id))
    return (
      <div>
        <h1>Movie Detail Container</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
        <div>{this.renderMovieDetails()}</div>
      </div>
    )
  }
}

export default MovieDetail;

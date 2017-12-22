import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {movieSearchQuery, inputMovie} from './MovieSearchAction';


export default class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
    this.handleInputMovie = this.handleInputMovie.bind(this);
  }

//create Handler for the go button to create the axios request
  handleInputMovie(e) {
    const {dispatch} = this.props
    const { value } = e.target
    console.log('HandleInputMovie', value)
    dispatch(inputMovie(value))
  }

  handleMovieSearch(e) {
    const { inputTitle, dispatch} = this.props
    console.log('MovieSearchHandler', inputTitle)
    dispatch(movieSearchQuery(inputTitle))
  }

  renderMovieCards(){
    if (this.props.results.length < 1) {
      return null
    } 
    return this.props.results.map(result => {
      return <div key={result.Imdbid}
                  className='pt-4'
              >
              <div className="card">
                <div className="card-block">
                <div className="row">
                <div className="col-4">
                <img id="poster" src={result.Poster}/>
                </div>
                <div className="col-4 pl-2">
                  <h2 className="card-title">{result.Title}</h2>
                      <h4 className="card-subtitle mb-2 pt-2 text-muted">{result.Year}</h4>
                  </div>
                  <div id="movieDetail" className="col-4">
                  <a href= {`#/movie/${result.imdbID}`} id="button" className="mt-10 btn btn-primary">More Information</a>
                  </div>
                  </div>
              </div>
</div>
            {/* <li className='form-control'>
              <img className='mw-5 mh-5' src={result.Poster} />      
              <div className='text-right'>{result.Title}</div>
              <div className='text-right'>{result.Year}</div>
              <div>{result.Plot}</div>
                  <a href= {`#/movie/${result.imdbID}`} className='text-right btn btn-primary'>More InFormation</a>
            </li> */}
            </div>
    })
  }

  render() {
    const { movieInput } = this.props 
    return (
      <div>
        <h1
          className='text-center pb-4'
        >Movie Finder</h1>
          <div className='input-group'>
                    <input
                        type="text"
                        id="user"
                        className="form-control"
                        onChange={this.handleInputMovie}
                    />
                    <button onClick={this.handleMovieSearch}
                    >Go</button>
                </div>
          <div>
            {this.renderMovieCards()}
          </div>
        </div>
    )
  }
}

import React, { Component } from 'react'

export class OmdbAPI extends Component{

  constructor(props) {
    super(props)
    this.state = {
      movies : [],
      movieId : "",
      movie: []
    }
    this.clickedTitle = this.clickedTitle.bind(this)
  }

  componentDidMount() {
    const moviesAPI = 'http://www.omdbapi.com/?s=batman&apikey=db875066'
    fetch(moviesAPI).then(data => data.json())
      .then(json =>
      this.setState({
        movies : json.Search
      })
    )
  }

  clickedTitle(imdbID) {
    console.log(this.state.movieId)
    let moviePage = "http://www.omdbapi.com/?i="+imdbID+"&apikey=db875066"
    fetch(moviePage)
    .then(movieData => movieData.json())
    .then(json =>
    this.setState({
      movie : json,
      movieId : imdbID
    }))
    console.log(this.state)
  }

  render() {
    return(
      <div>
      <MovieList movies={this.state.movies} clickedTitleCallback={this.clickedTitle}/>
      <DisplayMovie movie={this.state.movie}/>
      </div>
    )
  }
}

export class MovieList extends Component{
  constructor(props) {
    super(props)
    this.titleClicked = this.titleClicked.bind(this)
  }

  titleClicked(imdbID) {
    this.props.clickedTitleCallback(imdbID)
  }

  render() {

    let movieList = this.props.movies.map(function(movie,index) {
      let imdbID = movie.imdbID
      return <li key={index+Date.now()} onClick={(singleMovie) => this.titleClicked(imdbID)}>{movie.Title}</li>
    }.bind(this))

    return(
      <div>
        {movieList}
      </div>
    )
  }
}

export class DisplayMovie extends Component {
  render() {
    return(
      <div>
      {this.props.movie.Title}
      </div>
    )
  }
}

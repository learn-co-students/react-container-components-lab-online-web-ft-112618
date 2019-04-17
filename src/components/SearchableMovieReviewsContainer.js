import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'nuz4qTnkjXByicd6X0xU57gwjaj1tT0t';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`
export default class SearchableMovieReviewContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(URL + this.state.searchTerm)
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(resp => this.setState({ reviews: resp.results }))
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange}></input>
          <input type='submit'></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

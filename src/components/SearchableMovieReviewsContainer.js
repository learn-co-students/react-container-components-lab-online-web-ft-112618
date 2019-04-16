import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'z09BHsRz1UyIu2ziNCKlH7muzkrAWXBu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = { reviews: [], searchTerm: '' }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(json => this.setState({ reviews: json.results }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} placeholder="Type stuff here!"></input>
        </form>
        <MovieReviews reviews={this.state.reviews.slice(0, 3)}/>
      </div>
    )
  }
}

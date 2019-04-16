import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'V3FFCt1AMrtPnv7wRRgPpFis63MQ87X0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: undefined
    }
  }

  handleSubmit = (e) => {
    if (this.state.searchTerm) {
      e.preventDefault()
      fetch(`${URL}query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          reviews: json.results
        })
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    })
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer

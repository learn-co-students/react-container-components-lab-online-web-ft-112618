import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// https://api.nytimes.com/svc/movies/v2/reviews/all.json?&api-key=V3FFCt1AMrtPnv7wRRgPpFis63MQ87X0
const NYT_API_KEY = 'V3FFCt1AMrtPnv7wRRgPpFis63MQ87X0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({
        reviews: json.results }
      )})
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer

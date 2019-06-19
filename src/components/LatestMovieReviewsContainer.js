import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'yf2nQcxz1GtvC7Ae5x1DFvB0wH81XRWC';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(reviews => this.setState({ reviews }))
    }
    
    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Most Current NYT Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer


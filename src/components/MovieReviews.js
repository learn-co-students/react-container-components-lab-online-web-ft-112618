import React from 'react'

const MovieReviews = (props) =>
  <div className="review-list">
    {props.reviews && props.reviews.map(review =>
      <div className="review">
        <h5>{review.display_title} - {review.headline}</h5>
      </div>
    )}
  </div>




export default MovieReviews

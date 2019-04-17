import React from 'react';

 const MovieReviews = (props) => (
   <div className="review-list">
     {props.reviews.map(review =>
       <div className="review">
         <h2>{review.display_title}</h2>
         <h3>{review.headline}</h3>
         <h4>Opening Date: {review.opening_date}</h4>
         <p>{review.summary_short}</p>
       </div>
     )}
   </div>
 )

export default MovieReviews

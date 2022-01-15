import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends Rating.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
  onStarClick(nextValue) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
ReactDOM.render(
    <Rating />, 
    document.getElementById('app')
    
    );
    export default Rating
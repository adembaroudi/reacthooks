import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card  , Button} from 'react-bootstrap';
import { BiMovie} from "react-icons/bi";
import{MdOutlineDescription}  from"react-icons/md"
import {BrowserRouter as Router ,    Routes,
  Route,
  Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import MoviesData from './MoviesData';
 export const MovieCard = ({movie: {name , img , description  , rating}}) => {
  const [movies, setMovies]= useState( MoviesData)

    return (
    
<div className='container'>
<Card style={{ width: '20rem' }}>
<img  src={img}  style={{ width: '20rem' , height:"15rem" }}/>
<Card.Body>
  <Card.Title><BiMovie></BiMovie> {name}</Card.Title>
  <Card.Text>
  <div className='movie-rating'>
 <StarRatingComponent value={rating}/>
  </div>
  <Card.Title><MdOutlineDescription></MdOutlineDescription> description</Card.Title>
  {description}
  </Card.Text>
  <Link to={`/trailer/${name}`}><Button variant="outline-info"> Trailer</Button></Link>
</Card.Body>
</Card>

        </div>     
      
    ) ;
}    
  
export default MovieCard

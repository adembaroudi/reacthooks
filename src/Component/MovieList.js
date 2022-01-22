import React,{ useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar  , Button , Form , FormControl} from 'react-bootstrap';
import MovieCard from './MovieCard';
import {FaSearch} from 'react-icons/fa'
import{AiOutlinePlus} from 'react-icons/ai'
import StarRatingComponent from 'react-star-rating-component';

// import Rating from './Rating';

const MovieList = ({movies}) => {
    const [myInput , setMyInput]= useState("")
    const styleObject = {color :"black", marginTop: 50  , display: "flex" }
    const styleBrand = {width : 90 , height : 50}
    return (
        <div >
              <div>
              <Navbar bg="dark" variant="dark">
    <Container>
        {/* <img src="./../ax.jpg" style={styleBrand}/> */}
    <Navbar.Brand>ADAMFLIX</Navbar.Brand>
    <Button variant="outline-secondary"><AiOutlinePlus></AiOutlinePlus> Add Movie</Button>
    <Form className="d-flex">
    <FaSearch/>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setMyInput(e.target.value)}
        /> 

      </Form>
    </Container>
  </Navbar>
    </div>
    <div  >
        <div >
        <div   style={styleObject}>
     {movies.filter(film=>film?.name?.toLowerCase().includes(myInput)).map((m , i )=>(<MovieCard movie={m} key={i}/>))}

        </div>

        </div>
    </div>
    {/* <Rating  /> */}
        </div>
    )
}

export default MovieList

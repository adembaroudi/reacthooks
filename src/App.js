
import './App.css';
 import MovieList from './Component/MovieList';
 import AddMovie from './Component/AddMovie';
 import MoviesData from './Component/MoviesData';
 import React, {useState , useEffect} from 'react';
 import { 
  Route,Routes,
  Link} from 'react-router-dom';
  import Trailer from './Component/trailer';
  import TrailerGoal from './Component/TrailerGoal';
 import TrailerSpider from './Component/TrailerSpider';

         
const App = ({})=> {
  const [movies, setMovies]= useState( MoviesData)
  
  const [newMovie, setNewMovie]=useState({})
useEffect(() => {
  setMovies([...movies,newMovie])
 
}, [newMovie])
  return (

    <div className=" container App ">

   <div className='App'>    
        
        
   <Routes>
          <Route  exact path='/trailer/Godzilla'  element={<Trailer/>} />
          <Route  exact path='/trailer/Goal'  element={<TrailerGoal/>} />
          <Route  exact path='/trailer/Spiderman'  element={<TrailerSpider/>} />
          </Routes>
   </div>
  
   <Routes>
     <Route exact path="/" element={<MovieList movies={movies}/>}></Route>
   </Routes>
    </div>
    
  );
}

export default App;

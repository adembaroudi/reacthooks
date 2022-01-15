
import './App.css';
 import MovieList from './Component/MovieList';
 import AddMovie from './Component/AddMovie';
 import MoviesData from './Component/MoviesData';
 import React, {useState , useEffect} from 'react';
 import { 
  Route,Routes,
  Link} from 'react-router-dom';
  import Trailer from './Component/trailer';
 

         
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

          <Route  exact path='/trailer'  element={<Trailer/>} />

          </Routes>
   </div>
   <Routes>
    <Route exact path="/" render={()=>{
      <div>
        <AddMovie setNewMovie={setNewMovie} className="mt-3"/>
        <MovieList movies={movies}/> 

      </div>
}}>
      </Route> 
   </Routes>
    </div>
    
  );
}

export default App;

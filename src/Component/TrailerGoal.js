import React from 'react'
import {BrowserRouter as Router,
    Link} from 'react-router-dom';
    import {Button} from 'react-bootstrap';
const TrailerGoal = () => {
    return (
        <div>
                         <br/>
             <h1 className='text-primary'> Description and the Trailer of the movie </h1>
            

             <div>
             <p style={{margin: '20px'}}> Goal ! : Naissance d'un prodige (Goal!) est un film britannico-américain réalisé par Danny Cannon et sorti en 2005. Il s'agit du premier volet d'une trilogie racontant l'ascension d'un jeune joueur mexicain. </p>
             <iframe width="727" height="409" src="https://www.youtube.com/embed/4slq3RYc0TI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

             </div>
             <br/>


             <Link to ="/"> <Button variant="outline-primary"> Go to home page </Button></Link>
        </div>
    )
}

export default TrailerGoal

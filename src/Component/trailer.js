import React from 'react'
import {BrowserRouter as Router,
  Link} from 'react-router-dom';
  import {Button} from 'react-bootstrap';


const trailer = () => {
    return (
        <div>
                      <br/>
             <h1 className='text-primary'> Description and the Trailer of the movie </h1>
            

             <div>
             <p style={{margin: '20px'}}> Godzilla est un film de science-fiction américain réalisé par Gareth Edwards, sorti en 2014. Il s'agit d'un reboot de la série Godzilla, qui comprend trente films japonais réalisés entre 1954 et 2004, et marque le premier film prenant place dans le MonsterVerse, un univers partagé avec Kong: Skull Island (2017), Godzilla 2 : Roi des monstres (2019) et Godzilla vs. Kong (2021).</p>
             <iframe width="727" height="409" src="https://www.youtube.com/embed/odM92ap8_c0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

             </div>
             <br/>


             <Link to ="/"> <Button variant="outline-primary"> Go to home page </Button></Link>
        
        </div>
    )
}

export default trailer
import React from 'react'
import {BrowserRouter as Router,
    Link} from 'react-router-dom';
    import {Button} from 'react-bootstrap';
const TrailerSpider = () => {
    return (
        <div>
                             <br/>
             <h1 className='text-primary'> Description and the Trailer of the movie </h1>
            

             <div>
             <p style={{margin: '20px'}}> Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in the Spider-Man trilogy, and stars Tobey Maguire as the titular character, alongside Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, and Rosemary Harris. The film centers on outcast teen genius Peter Parker who develops spider-like superhuman abilities after being bitten by a genetically-altered spider and decides to use his newfound powers to fight crime as Spider-Man. </p>
             <iframe width="758" height="409" src="https://www.youtube.com/embed/TYMMOjBUPMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

             </div>
             <br/>


             <Link to ="/"> <Button variant="outline-primary"> Go to home page </Button></Link>
        </div>
    )
}

export default TrailerSpider


import {v4 as uuidv4} from 'uuid'

 export const MoviesData = [{
    id: uuidv4(),
    img: "https://m.media-amazon.com/images/I/91O8mnWi3PL._AC_SL1500_.jpg",
    rating: 3,
    name : "Godzilla" , 
    description : "Godzilla est un film de science-fiction américain réalisé par Gareth Edwards, sorti en 2014. Il s'agit d'un reboot de la série Godzilla, qui comprend trente films japonais réalisés entre 1954 et 2004, et marque le premier film prenant place dans le MonsterVerse, un univers partagé avec Kong: Skull Island (2017), Godzilla 2 : Roi des monstres (2019) et Godzilla vs. Kong (2021)."
},
{
    id : uuidv4() , 
    img : "https://images.moviefit.me/t/b/1272-goal-the-dream-begins.webp",
    rating : 4 ,
    name : "Goal",
    description : "Goal ! : Naissance d'un prodige (Goal!) est un film britannico-américain réalisé par Danny Cannon et sorti en 2005. Il s'agit du premier volet d'une trilogie racontant l'ascension d'un jeune joueur mexicain."
},
{
    id : uuidv4(), 
    img :"https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg" , 
    rating : 5 , 
    name : "Spiderman" , 
    description :"Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name. Directed by Sam Raimi from a screenplay by David Koepp, it is the first installment in the Spider-Man trilogy, and stars Tobey Maguire as the titular character, alongside Willem Dafoe, Kirsten Dunst, James Franco, Cliff Robertson, and Rosemary Harris. The film centers on outcast teen genius Peter Parker who develops spider-like superhuman abilities after being bitten by a genetically-altered spider and decides to use his newfound powers to fight crime as Spider-Man."
}
]
export default MoviesData
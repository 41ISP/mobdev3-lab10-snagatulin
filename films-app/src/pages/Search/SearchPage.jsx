import { useEffect, useState } from "react";
import "./SearchPage.css"

function SearchPage(){
const [movieName, setMovieName] = useState("")
const [movies, setMovies] = useState([]);
useEffect(() => {console.log(movies)}, [movies])


const handleSearch = async() => {
try{
const res = fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman&page=1`)
const json = await res.json()
console.log(json);}
catch(err) {
    console.error(err);
}

}


return(
     <div className="container">
        <div className="header">
            <h1>🎬 Movie Search Results</h1>
            <div className="search-container">
                <input value={movieName} type="text" className="search-input" placeholder="Search for movies..."  
                onChange={(e) => setMovieName(e.target.value)}/>
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
            <div className="results-info">
                Total Results: 201 | Showing: 10 movies
            </div>
        </div>

        <div className="movie-grid">
 

        </div>
    </div>
)

}
  


export default SearchPage;
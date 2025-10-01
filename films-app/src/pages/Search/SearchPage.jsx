import { useEffect, useState } from "react";
import "../Search/SearchPage.css"
import Stats from "../../components/Stats/Stats";
import MoviesDetailsPages from "../MovieDetail/MovieDetails";
import MovieCard from "../../components/MovieCard/MovieCard";

function SearchPage() {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState(undefined);
    useEffect(() => { console.log(movies) }, [movies])
  

    const handleSearch = async () => {
        try {
            const parameters = new URLSearchParams({
                apikey: import.meta.env.VITE_SOME_KEY, s: movieName, page: 1,
            })
            const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
            const json = await res.json();
            console.log(json);
            setMovies(json);
        }
        catch (err) {
            console.error(err);
        }

    }


    return (
        <div className="container">
            <div className="header">
                <h1>🎬 Movie Search Results</h1>
                <div className="search-container">
                    <input value={movieName} type="text" className="search-input" placeholder="Search for movies..."
                        onChange={(e) => setMovieName(e.target.value)} />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
            {movies && <Stats {...movies} />}
            </div>
            <div className="movie-grid">
 {movies && movies.Search && movies.Search.map((movie) => (
  <MovieCard key={movie.imdbID} movie={movie} onClick={() => handleMovieClick(movie)} />))}
         </div>
         </div>
    )
}

export default SearchPage;
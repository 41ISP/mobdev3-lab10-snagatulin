import { useEffect, useState } from "react"
import "./Search.css"
import Stats from "../../components/Stats/Stats"
import MovieCard from "../../components/MovieCard/MovieCard"

const Search = () => {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState(undefined)
    const [error, setError] = useState("")

    useEffect(() => {
        console.log(movies)
    }, [movies])

    const handleSearch = async () => {
        try {
            setError("");
            setMovies(undefined);
            const trimmedMovieName = movieName.trim()
            if(trimmedMovieName.length <= 0) return
            const parameters = new URLSearchParams({
                apikey: import.meta.env.VITE_OMDB_APIKEY, s: movieName, page: 1
            })
            const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
            const json = await res.json()
             if(json.Response === "False") {
                throw new error("Ты не пройдешь!")
            }

            setMovies(json)
        } catch (err) {

            setError(err.message)
            console.error(err)
        }
    }

    return (
        <div className="container">
            <div className="header">
                <h1>🎬 Movie Search Results</h1>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for movies..."
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                    />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
                {error && <p>{error}</p>}
                {movies && <Stats {...movies} />}
            </div>

            <div className="movie-grid">
                {movies && movies.Search.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)}
            </div>
</div>
            
    )
}

export default Search
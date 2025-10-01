import "../MovieCard/MovieCard.css"

const MovieCard = ({ movie, onClick, type}) => {
    return (
           <div class="movie-card">
                <div class="poster-container">
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : defaultImage} />
                </div>
                <div class="movie-info">
                        <div class="movie-title">{movie.Title}</div>
                        <div class="movie-meta">
                            <span class="movie-year">{movie.Year}</span>
                            <span class="movie-type">{movie.type}</span>
                        </div>
                         <div class = "movie-id" onClick={() => onClick(movie.imdbID)}/>
                    </div>
                    </div>
    )

}

export default MovieCard;
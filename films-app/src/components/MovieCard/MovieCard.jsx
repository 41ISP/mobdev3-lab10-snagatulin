

const MovieCard = ({ movie, onClick }) => {
    return (
        <div onClick={() => onClick(movie.imdbID)}>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : defaultImage} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    )
}

export default MovieCard;
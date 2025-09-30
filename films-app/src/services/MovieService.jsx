const MovieFeed = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
            )
            setMovies(await response.json())
        }
    }, []) // Блок внутри useEffect срабатывает когда компонент прогружается

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard {...movie} />
            ))}
        </div>
    )
}
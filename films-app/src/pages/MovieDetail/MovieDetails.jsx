import { useNavigate } from 'react-router-dom'
import "./MovieDetails.css"

function MoviesDetailsPages()
 {


const { id } = useParams()
const [movie, setMovie] = useState(null)

useEffect(() => {
    const loadMovieDetails = async () => {
        try {
            const data = await fetchMovieDetails(id)
            setMovie(data)
        } catch (error) {
            setError('Что-то тут не так...'); 
        }
    }

    if (id) {
        loadMovieDetails()
    }
}, [id])


const navigate = useNavigate()
const goBack = () => navigate(-1);
<button onClick={goBack}>← Назад</button>

return (
        <div className="container">
            <a href="#" className="back-button">← Back to Search</a>

            <div className="movie-detail-card">
                <div className="movie-header">
                    <div className="poster-section">
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg"
                            alt="Joker"
                            className="poster-image" />
                        <div className="rating-badge">⭐ 8.3</div>
                    </div>

                    <div className="info-section">
                        <h1 className="movie-title">Joker</h1>
                        <div className="movie-tagline">
                            <span className="tag">2019</span>
                            <span className="tag rated">R</span>
                            <span className="tag">122 min</span>
                            <span className="tag">Crime, Drama, Thriller</span>
                        </div>

                        <div className="movie-meta">
                            <div className="meta-item">
                                <span className="meta-label">Released:</span>
                                <span className="meta-value">04 Oct 2019</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Language:</span>
                                <span className="meta-value">English, German</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Country:</span>
                                <span className="meta-value">
                                    United States, Canada, Australia
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">IMDb ID:</span>
                                <span className="meta-value">tt7286456</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movie-body">
                    <div className="section">
                        <h2 className="section-title">Plot Summary</h2>
                        <p className="plot-text">
                            Arthur Fleck, a party clown and a failed stand-up
                            comedian, leads an impoverished life with his ailing
                            mother. However, when society shuns him and brands
                            him as a freak, he decides to embrace the life of
                            chaos in Gotham City.
                        </p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Cast & Crew</h2>
                        <div className="info-grid">
                            <div className="info-box">
                                <div className="info-box-title">Director</div>
                                <div className="info-box-content">
                                    Todd Phillips
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Writer</div>
                                <div className="info-box-content">
                                    Todd Phillips, Scott Silver, Bob Kane
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Actors</div>
                                <div className="info-box-content">
                                    Joaquin Phoenix, Robert De Niro, Zazie Beetz
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Ratings & Reviews</h2>
                        <div className="ratings-container">
                            <div className="rating-box">
                                <div className="rating-source">
                                    Internet Movie Database
                                </div>
                                <div className="rating-value">8.3/10</div>
                            </div>
                            <div className="rating-box">
                                <div className="rating-source">Rotten Tomatoes</div>
                                <div className="rating-value">68%</div>
                            </div>
                            <div className="rating-box">
                                <div className="rating-source">Metacritic</div>
                                <div className="rating-value">59/100</div>
                            </div>
                        </div>

                        <div className="awards-box">
                            <div className="awards-icon">🏆</div>
                            <div className="awards-text">
                                Won 2 Oscars. 120 wins & 246 nominations total
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Box Office & Statistics</h2>
                        <div className="box-office-section">
                            <div className="box-office-card">
                                <div className="box-office-label">Box Office</div>
                                <div className="box-office-value">$335.5M</div>
                            </div>
                            <div className="box-office-card">
                                <div className="box-office-label">IMDb Votes</div>
                                <div className="box-office-value">1,637,986</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}


export default MoviesDetailsPages;
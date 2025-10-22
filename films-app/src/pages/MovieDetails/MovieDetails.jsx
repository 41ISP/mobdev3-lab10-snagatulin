import { Link, useNavigate, useParams } from 'react-router-dom'
import "./MovieDetails.css"
import { useEffect, useState } from 'react'

function MoviesDetailsPages()
 {
   const[MovieDetails, SetMovieDetails] = useState(undefined);
   const{id} = useParams()
   useEffect(() => {
    
        const handleSearch = async () => {
        try {
            const parameters = new URLSearchParams({
                apikey: import.meta.env.VITE_OMDB_APIKEY, i: id
            })
            const res = await fetch(`https://www.omdbapi.com/?${parameters.toString()}`)
            const json = await res.json()
            console.log(json);
            SetMovieDetails(json);
        } catch (err) {

            console.error(err)
        }
    }
handleSearch();

}, [])



return(
        <div className="container">
            <Link to="/" className="back-button">← Back to Search</Link>


           {MovieDetails && <div className="movie-detail-card">
                <div className="movie-header">
                    <div className="poster-section">
                        <img
                            src={MovieDetails.Poster}
                            alt={MovieDetails.Title}
                            className="poster-image" />
                        <div className="rating-badge">⭐{MovieDetails.imdbRating}</div>
                    </div>

                    <div className="info-section">
                        <h1 className="movie-title">{MovieDetails.Title}</h1>
                        <div className="movie-tagline">
                            <span className="tag">{MovieDetails.Year}</span>
                            <span className="tag rated">{MovieDetails.Rated}</span>
                            <span className="tag">{MovieDetails.Runtime}</span>
                            <span className="tag">{MovieDetails.Genre}</span>
                        </div>

                        <div className="movie-meta">
                            <div className="meta-item">
                                <span className="meta-label">Released:</span>
                                <span className="meta-value">{MovieDetails.Released}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Language:</span>
                                <span className="meta-value">{MovieDetails.Language}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Country:</span>
                                <span className="meta-value">
                                    {MovieDetails.Country}
                                </span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">IMDb ID:</span>
                                <span className="meta-value">{MovieDetails.imdbID}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movie-body">
                    <div className="section">
                        <h2 className="section-title">Plot Summary</h2>
                        <p className="plot-text">
                            {MovieDetails.Plot}
                        </p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Cast & Crew</h2>
                        <div className="info-grid">
                            <div className="info-box">
                                <div className="info-box-title">Director</div>
                                <div className="info-box-content">
                                    {MovieDetails.Director}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Writer</div>
                                <div className="info-box-content">
                                    {MovieDetails.Writer}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">Actors</div>
                                <div className="info-box-content">
                                    {MovieDetails.Actors}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Ratings & Reviews</h2>
                        <div className="ratings-container"> 
                            {MovieDetails.Ratings.map((el) => (
                            <div className="rating-box">
                                <div className="rating-source">{el.Source}</div>
                             <div className="rating-value">{el.Value}</div>
                             </div>
                            ))}
                        </div>

                        <div className="awards-box">
                            <div className="awards-icon">🏆</div>
                            <div className="awards-text">
                                {MovieDetails.Awards}
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <h2 className="section-title">Box Office & Statistics</h2>
                        <div className="box-office-section">
                            <div className="box-office-card">
                                <div className="box-office-label">Box Office</div>
                                <div className="box-office-value">{MovieDetails.BoxOffice}</div>
                            </div>
                            <div className="box-office-card">
                                <div className="box-office-label">IMDb Votes</div>
                                <div className="box-office-value">{MovieDetails.imdbVotes}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
 }
        </div>
)
}


export default MoviesDetailsPages;
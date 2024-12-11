import {Link} from 'react-router-dom'
import './index.css'

const MovieGridGenerater = props => {
  const {movieDetails} = props
  const upadetdMovieDetails = {
    posterPath: movieDetails.poster_path,
    title: movieDetails.title,
    votAeverage: movieDetails.vote_average,
    id: movieDetails.id,
  }
  const {posterPath, title, votAeverage, id} = upadetdMovieDetails

  const imageUrl = `https://image.tmdb.org/t/p/original${posterPath}`
  return (
    <li className="movie-grid-item">
      <img
        src={imageUrl}
        alt="poster"
        className="movie-poster"
        key="poster_path"
      />
      <div className="movie-detail-conatiner">
        <div className="movie-detail-text-conateiner">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-rating">{votAeverage}</p>
        </div>
        <Link to={`/movie/${id}`}>
          <button type="button" className="button">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default MovieGridGenerater

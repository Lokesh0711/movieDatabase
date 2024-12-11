import {useState, useEffect} from 'react'

import Header from '../Header'
import './index.css'

const SingleMovie = props => {
  const [movieDetails, updateMovieDetaiils] = useState(undefined)
  const [castDetails, updateCastDetaiils] = useState(undefined)

  const getMovieDetails = async () => {
    const {match} = props
    const {params} = match
    const {id} = params
    const API_KEY = '19edd99d62bd9c89efd4810f6820e895'

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    const response = await fetch(url)
    const data = await response.json()

    const movieData = {
      posterPath: `https://image.tmdb.org/t/p/original${data.poster_path}`,
      originalTitle: data.original_title,
      voteAverage: data.vote_average,
      runtime: data.runtime,
      genres: data.genres,
      releaseDate: data.release_date,
      homepage: data.homepage,
      production_companies: data.production_companies,
      overview: data.overview,
    }

    updateMovieDetaiils(movieData)
  }

  const getCastDetails = async () => {
    const {match} = props
    const {params} = match
    const {id} = params
    const API_KEY = '19edd99d62bd9c89efd4810f6820e895'

    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    const response = await fetch(url)
    const data = await response.json()

    const castData = data.cast.map(eachCast => ({
      castProfilePath: `https://image.tmdb.org/t/p/original${eachCast.profile_path}`,
      originalName: eachCast.original_name,
      character: eachCast.character,
      id: eachCast.id,
    }))
    updateCastDetaiils(castData)
  }

  useEffect(() => {
    getMovieDetails()
    getCastDetails()
  }, [])

  return (
    <>
      <Header />
      <div className="movie-bg-container">
        {movieDetails !== undefined && (
          <div className="movie-card">
            <img
              src={movieDetails.posterPath}
              alt="poster"
              className="movie-card-poster"
            />
            <div className="movie-card-text-constainer">
              <div className="movie-card-title-container">
                <h1 className="movie-card-title">
                  {movieDetails.originalTitle}
                </h1>
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Homepage
                </a>
              </div>
              <ul className="movie-rating-gener-list">
                <li className="movie-desc">
                  Rating : {movieDetails.voteAverage}
                </li>
                <li className="movie-desc">
                  <ul className="gener-list">
                    Geners:
                    {movieDetails.genres.map(eachGener => (
                      <li key={eachGener.id}>{eachGener.name},</li>
                    ))}
                  </ul>
                </li>
                <li className="movie-desc">
                  Duration : {movieDetails.runtime}M
                </li>
              </ul>
              <p className="movie-desc">{movieDetails.releaseDate}</p>
              <p className="movie-desc">{movieDetails.overview}</p>
            </div>
          </div>
        )}
        {castDetails !== undefined && (
          <ul className="cast-list-container">
            {castDetails.map(eachCast => (
              <li key={eachCast.id} className="cast-card">
                <img
                  src={eachCast.castProfilePath}
                  alt="cast"
                  className="cast-image"
                />
                <h1 className="cast-name">{eachCast.originalName}</h1>
                <p className="cast-name cast-charecter">{eachCast.character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default SingleMovie

import {Component} from 'react'

import Header from '../Header'
import MovieGridGenerater from '../MovieGridGenerater'

import './index.css'

class Home extends Component {
  state = {movieList: undefined}

  componentDidMount() {
    this.getMoviedata()
  }

  getMoviedata = async () => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWVkZDk5ZDYyYmQ5Yzg5ZWZkNDgxMGY2ODIwZTg5NSIsIm5iZiI6MTczMzY5MDgxNC4yNTksInN1YiI6IjY3NTYwNWJlNzY0ZmQ5NGU0MjJmNWIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8da3ujKuX-0DHZFddziDIlwZLNXM5PaMzIVp-gFrLo'
    const API_KEY = '19edd99d62bd9c89efd4810f6820e895'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({movieList: data.results})
  }

  render() {
    const {movieList} = this.state
    const movieListAvailable = movieList !== undefined
    return (
      <>
        <Header />
        <div className="Home-bg-container">
          <h1 className="page-title">Popular</h1>
          {movieListAvailable && (
            <ul className="movie-list-container">
              {movieList.map(eachMovie => (
                <MovieGridGenerater
                  key={eachMovie.id}
                  movieDetails={eachMovie}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default Home

import {Component} from 'react'

import Header from '../Header'
import MovieGridGenerater from '../MovieGridGenerater'

import './index.css'

class Search extends Component {
  state = {searchResult: undefined}

  componentDidMount() {
    this.getSearchedData()
  }

  getSearchedData = async () => {
    const {match} = this.props
    const {params} = match
    const {searchInput} = params
    const API_KEY = '19edd99d62bd9c89efd4810f6820e895'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=1`

    const response = await fetch(url)
    const data = await response.json()
    this.setState({searchResult: data.results})
  }

  render() {
    const {searchResult} = this.state
    const searchResultAvailable = searchResult !== undefined
    return (
      <>
        <Header />
        <div>
          <h1>Search</h1>
          {searchResultAvailable && (
            <ul className="movie-list-container">
              {searchResult.map(eachMovie => (
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

export default Search

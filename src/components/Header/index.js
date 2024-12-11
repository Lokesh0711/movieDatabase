import {useState} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const [searchInput, changeSearch] = useState('')

  const onEditSearch = event => {
    changeSearch(event.target.value)
  }

  const onClickSearch = () => {
    console.log(searchInput)
    changeSearch('')
  }

  return (
    <div className="header-bg-container">
      <h1 className="header-title">movieDB</h1>
      <div className="header-nav-buttons">
        <div className="header-nav-search-container">
          <input
            type="search"
            className="nav-search-field"
            onChange={onEditSearch}
          />
          <Link to={`/search/${searchInput}`}>
            <button
              className="nav-button"
              type="button"
              onClick={onClickSearch}
            >
              Search
            </button>
          </Link>
        </div>
        <Link to="/">
          <button className="nav-button" type="button">
            Popular
          </button>
        </Link>
        <Link to="/top-rated">
          <button className="nav-button" type="button">
            Top Rated
          </button>
        </Link>
        <Link to="/upcoming">
          <button className="nav-button" type="button">
            Upcoming
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import Search from './components/Search'

import SingleMovie from './components/SingleMovie'

import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={Upcoming} />
    <Route path="/movie/:id" component={SingleMovie} />
    <Route path="/search/:searchInput" component={Search} />
  </Switch>
)

export default App

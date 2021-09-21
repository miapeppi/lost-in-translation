import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  // Redirect
} from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Translation from './components/Translation/Translation'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Lost in Translation</h1>
        <h3>
          <span className="material-icons">catching_pokemon</span>
        </h3>
        <hr />
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/login" exact component={ Login } />
          <Route path="/profile" exact component={ Profile } />
          <Route path="/translation" exact component={ Translation } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

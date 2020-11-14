import React from 'react';
import './styles.css';
import TweetPage from './pages/TweetPage';
import UserPage from './pages/UserPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <nav className="navbar fixed-top navbar-dark bg-dark justify-content-start">
          <Link to="/" className="nav-item nav-link py-2 px-4 active">Home</Link>
          <Link to="/profile" className="nav-item nav-link py-2 px-4" href="/profile.html">Profile</Link>
        </nav>
        
        <Switch>
          <Route exact path="/">
            <TweetPage />
          </Route>
          <Route path="/profile">
            <UserPage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

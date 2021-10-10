/* eslint-disable react-hooks/exhaustive-deps */
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './pages/Landing';
import DetailsPage from './pages/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/pokemon/:name' component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

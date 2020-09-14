
import 'fontsource-roboto';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ButtonAppBar from './Components/ButtonAppBar';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Router>
        <nav>
          <ul>
            <li>
              <Route exact path="/" component={LandingPage}/>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;

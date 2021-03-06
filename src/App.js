
import 'fontsource-roboto';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import CanvasContainer from './Components/CanvasContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/canvas" exact component={CanvasContainer} />
          <Route path="/projects" exact component={Projects} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

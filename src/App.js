import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Header.js';
import GuitarList from './guitar-list.js';
import Detail from './Detail.js';
// import About from './About.js';

import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Link to="/">go home</Link>
          {/* <Link to="/about/about">about me</Link> */}
          <Switch>
            <Route exact path="/:guitars?" component={GuitarList} />
            <Route exact path="/guitars/:guitarID" component={Detail} />
            {/* <Route exact path="/" component={About} /> */}
          </Switch>
        </div>
      </Router>
    )
    }
}
// export default App;
//heres a change
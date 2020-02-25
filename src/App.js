import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Header.js';
import GuitarList from './guitar-list.js';
import Detail from './Detail.js';
import CreateGuitar from './create-guitar.js';
import UpdateGuitar from './update-guitar.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import About from './About.js';

// import {
//   Route,
//   Switch,
//   Link,
//   BrowserRouter as Router,
// } from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Link to="/">go home </Link>
          <Link to="/create-guitar/New">add guitar</Link>
          {/* <Link to="/about/about">about me</Link> */}
          <Switch>
            <Route exact path="/:guitars?" component={GuitarList} />
            <Route exact path="/guitars/:guitarID" component={Detail} />
            <Route path="/:create-guitar/New" component={CreateGuitar} />
            <Route exact path='/update/:id' component={UpdateGuitar} />
            {/* <Route exact path="/" component={About} /> */}
          </Switch>
        </div>
      </Router>
    )
    }
}
// export default App;
//heres a change
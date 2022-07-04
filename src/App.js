import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Climbs from './components/pages/Climbs';
import Hikes from './components/pages/Hikes';
import Cooks from './components/pages/Cooks';
import Skis from './components/pages/Skis';
import Codes from './components/pages/Codes';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/me' component={Home} />
          <Route path='/climb' component={Climbs} />
          <Route path='/hike' component={Hikes} />
          <Route path='/ski' component={Skis} />
          <Route path='/code' component={Codes} />
          <Route path='/cook' component={Cooks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

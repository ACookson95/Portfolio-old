import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Sidebar from './components/Sidebar';
import NoMatch from './components/NoMatch'
import Contact from './components/Contact'
import './App.css';

const App = () => (
  <div className='container'>
    <Sidebar />
    <Switch>
      <Route to exact path='/' component={Home} />
      <Route to exact path='/contact' component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;

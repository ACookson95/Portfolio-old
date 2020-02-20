import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Sidebar from './components/Sidebar';
import NoMatch from './components/NoMatch'

const App = () => (
  <div className='container'>
    <Sidebar />
    <Switch>
      <Route to exact path='/' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;

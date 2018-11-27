import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TodoPage from './TodoPage';
import Clock from './Clock';
import Toggle from './Toggle';
import ContactPage from './ContactPage';
import Assignment from './Assignment';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/todo' component={TodoPage}/>
      <Route path='/clock' component={Clock}/>
      <Route path='/toggle' component={Toggle}/>
      <Route path='/form' component={ContactPage}/>
      <Route path='/assignment' component={Assignment}/>
    </Switch>
  </main>
);

export default Main;

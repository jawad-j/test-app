import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './component/test';
import Details from './component/Details';
import List from './component/List';
export default class App extends Component {

  render() {
    return (
         <>
        <BrowserRouter>
          <Switch>
            <Route path='/testing'Component={Test}>
              <Test/>
            </Route>
            <Route path='/list' component={List}>
              <List/>
            </Route>
            <Route path='/details'>
              <Details/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

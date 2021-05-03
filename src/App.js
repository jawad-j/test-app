import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './component/test';
export default class App extends Component {
  render() {
    return (
         <>
        <BrowserRouter>
          <Switch>
            <Route path='/testing'>
              <Test/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

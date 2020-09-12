import React from 'react'
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import store from './store';
import { createBrowserHistory } from 'history'

import './styles/main.scss';
import Main from './views/pages/main';
import PageNotFound from './views/pages/pageNotFound';
import Product from "./views/pages/product";
import Checkout from "./views/pages/checkout";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={() => <Redirect to="/section/livingroom"/>}/>
          <Route exact path='/section/:section' component={Main}/>
          <Route exact path='/product/:id' component={Product}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </Provider>
  )
}

render(<App/>, document.getElementById('root'))

export default App;

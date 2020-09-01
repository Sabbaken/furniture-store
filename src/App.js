import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import store from './store';

import './styles/main.scss';
import Main from './views/pages/main';
import PageNotFound from './views/pages/pageNotFound';
import Product from "./views/pages/product";
import Checkout from "./views/pages/checkout";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Redirect to="/section/livingroom"/>}/>
          <Route exact path='/section/:section' component={Main}/>
          <Route exact path='/product/:id' component={Product}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

render(<App/>, document.getElementById('root'))

export default App;

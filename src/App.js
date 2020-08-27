import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import store from './store';

import './styles/main.scss';
import Main from './views/pages/main';
import PageNotFound from './views/pages/pageNotFound';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route component={PageNotFound}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )
}

render(<App/>, document.getElementById('root'))

export default App;

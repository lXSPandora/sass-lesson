import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.scss';

//screens
import Landing from './screens/landing/Landing';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();

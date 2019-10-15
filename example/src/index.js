import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
import App from './App';
import SharPeiComponent from './SharPei';
import GermanShepherdComponent from './GermanShepherd';
import GoldenRetrieverComponent from './GoldenRetriever';

ReactDOM.render(
  <BrowserRouter>
    <Analytics id="UA-138681497-1" debug>
      <App>
        <Switch>
          <Route exact path="/golden-retriever" component={GoldenRetrieverComponent} />
          <Route exact path="/german-shepherd" component={GermanShepherdComponent} />
          <Route exact path="/shar-pei" component={SharPeiComponent} />
        </Switch>
      </App>
    </Analytics>
  </BrowserRouter>,
  document.getElementById('root')
);

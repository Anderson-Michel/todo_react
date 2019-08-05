import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Inicio } from './component/views/Inicio';
import { CreateTarefa } from './component/views/CreateTarefa';
import { EditTarefa } from './component/views/EditTarefa';

class App extends Component {

  render() {
    return (
      <div id="body">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Inicio} exact />
              <Route path="/create" component={CreateTarefa} />
              <Route path="/edit/:id" component={EditTarefa} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

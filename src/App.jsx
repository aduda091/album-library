import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Artist from './pages/Artist';

import * as routes from './constants/routes';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route path={routes.ARTIST} component={Artist} />
                <Route path={routes.HOME} component={Home} exact />
            </Switch>
        </div>
    );
}

export default App;

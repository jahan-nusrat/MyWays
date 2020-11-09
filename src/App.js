import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import './app.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// components
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/alert/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

// context
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

// utils
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <div className="uk-container">
                                <Alerts />
                                <Switch>
                                    <PrivateRoute exact path='/' component={Home} />
                                    <Route exact path='/about' component={About} />
                                    <Route exact path='/register' component={Register} />
                                    <Route exact path='/login' component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </ContactState>
        </AuthState>  
    )
}

export default App;

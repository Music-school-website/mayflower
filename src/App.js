//import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Home} from "./page/home";
import {Intro} from "./page/introduction";
import {Course} from "./page/courses";
import {Honor} from "./page/honor";
import {SingleCourse} from "./page/single-course";
import {Contact} from "./page/contact-us";

import {store} from "./redux/store";
import {Found} from "./page/fundation";
import {Place} from "./page/place";


export class App extends Component{
    render() {
        return (
            <Provider store = {store}>
                <Route>
                    <Switch>
                        <Route
                            path="/course/:id"
                            component={routeProps => <SingleCourse {...routeProps} />}
                        />
                        <Route
                            path="/course"
                            component={routeProps => <Course {...routeProps} />}
                        />
                        <Route
                            path="/contact"
                            component={routeProps => <Contact {...routeProps} />}
                        />
                        <Route
                            path="/foundation"
                            component={routeProps => <Found {...routeProps} />}
                        />
                        <Route
                            path="/home"
                            component={routeProps => <Home {...routeProps} />}
                        />
                        <Route
                            path="/honor"
                            component={routeProps => <Honor {...routeProps} />}
                        />
                        <Route
                            path="/place"
                            component={routeProps => <Place {...routeProps} />}
                        />

                        <Route
                            path="/introduction"
                            component={routeProps => <Intro {...routeProps} />}
                        />
                        <Route
                            path="/single-course"
                            component={routeProps => <SingleCourse {...routeProps} />}
                        />
                        <Redirect to="/home"/>
                    </Switch>
                </Route>
            </Provider>
        )
    }
}

export default App;

//import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {Home} from "./home";
import {Intro} from "./introduction";
import {Course} from "./courses";
import {Honor} from "./honor";
import {SingleCourse} from "./single-course";
import {Contact} from "./contact-us";


export class App extends Component{
  render() {
    return (
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
                path="/home"
                component={routeProps => <Home {...routeProps} />}
            />
              <Route
                  path="/honor"
                  component={routeProps => <Honor {...routeProps} />}
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
    )
  }
}

export default App;

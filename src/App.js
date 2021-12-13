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
import {News} from "./page/news";
import {NewsDetail} from "./page/news_detail";
import {store} from "./redux/store";
import {Found} from "./page/fundation";
import {Place} from "./page/place";
import {Teacher} from "./page/teacher";
import {MusicProduction} from "./page/music-production";
import {Oversea} from "./page/overseas";



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
                            path="/music-production"
                            component={routeProps => <MusicProduction {...routeProps} />}
                        />
                        <Route
                            path="/news"
                            component={routeProps => <News {...routeProps} />}
                        />
                        <Route
                            path="/news_detail/:id"
                            component={routeProps => <NewsDetail {...routeProps} />}
                        />
                        <Route
                            path="/place"
                            component={routeProps => <Place {...routeProps} />}
                        />
                        <Route
                            path="/teacher/:id"
                            component={routeProps => <Teacher {...routeProps} />}
                        />
                        <Route
                            path="/introduction"
                            component={routeProps => <Intro {...routeProps} />}
                        />
                        <Route
                            path="/oversea"
                            component={routeProps => <Oversea {...routeProps} />}
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

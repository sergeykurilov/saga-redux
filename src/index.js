import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import {Route, Switch} from 'react-router-dom';
import "./styles.css";
import store from "./redux";
import {Provider} from "react-redux";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import {history} from "./redux/reducers";
import {ConnectedRouter} from "connected-react-router";




ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' exact>
                    <App/>
                </Route>
                <Route path='/blog' exact>
                    <Blog/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </ConnectedRouter>
    </Provider>
    , document.getElementById("app"));
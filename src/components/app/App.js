import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from "../pages/home-page";
import FavoritePage from "../pages/favorite-page";


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact
                />
                <Route
                    path="/favorite"
                    component={FavoritePage}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

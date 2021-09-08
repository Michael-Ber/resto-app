import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getMenuItems().then(res => console.log(res));
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <Router>
                <Switch>
                    <Route path="/menu" exact><AppHeader total={50}/><MainPage/></Route>
                    <Route path="/cart" exact><AppHeader total={50}/><CartPage/></Route>
                    <Route path="/" exact>
                        <AppHeader total={50}/>
                        <MainPage/>
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default WithRestoService()(App);
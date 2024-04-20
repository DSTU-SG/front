import React from 'react';
import { Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from 'react';
import { AuthContext } from '../context';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    return (
        isAuth
        ?
        <Switch>
            {privateRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/news'/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/auth'/>
        </Switch>
    );
};

export default AppRouter;
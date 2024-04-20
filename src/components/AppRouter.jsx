import React from 'react';
import { Route} from "react-router-dom";
import {publicRoutes} from "../router";
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const AppRouter = () => {

    return (
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
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import {
    ROUTE_LOGIN,
    ROUTE_BASKET,
} from './routes';

import { Login } from './login';
import { Basket } from './basket';

export const App = () => (
    <div>
        <Router>
            <Routes>
                <Route path={ROUTE_BASKET} element={<Basket />} />
                <Route path={ROUTE_LOGIN} element={<Login />}/>
            </Routes>
        </Router>
    </div>
);

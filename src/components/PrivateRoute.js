import React from 'react';
import {Route, Redirect} from 'react-router-dom'

import { useAuth } from '../context/AuthContext';
export const PrivateRoute = ({component: Component, ...rest}) => {
    const {login} = useAuth
    return (
        <Route
            {...rest}
            render={props => {
                return login ? <Component {...props}/> : <Redirect to='/'/>
            }}
        >

        </Route>
    )
}

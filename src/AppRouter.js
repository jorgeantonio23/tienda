//Configurar mis rutas

import React from 'react';
import { Home } from './Home';
import { Administrador } from './Administrador';
import { NavBar } from './components/NavBar';
import { Products } from './Products';
import {PrivateRoute} from './components/PrivateRoute'

import {AuthProvider} from './context/AuthContext'

import{
    BrowserRouter as Router,
    Switch,
    Route,
   
    
} from "react-router-dom";







export const AppRouter = () => {
    
    return (

        <AuthProvider>

            <Router>
            <div>

                <NavBar/>

                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Products" component={Products}/>
                    <PrivateRoute exact path="/Administrador" component={Administrador} />
                    {/* <Route exact path="/SeeProducts" component={SeeProducts}/> */}
                    
                </Switch>
            </div>
            </Router>
            

        </AuthProvider>

        
        
    )
}


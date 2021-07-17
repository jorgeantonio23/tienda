import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <ul>
            
                <i className="fab fa-apple"></i>
                <li> <NavLink  to="./">Home</NavLink > </li>
                <li><NavLink  to="./Products">Products</NavLink ></li>
                <li> <NavLink  to="./Administrador">Administrador</NavLink ></li>
                <li><NavLink to="./SeeProducts">view</NavLink></li>
                <div className="iconos">
                <i className="fas fa-search"></i> 
                <i className="fas fa-cart-plus"></i>
                </div>
               
            </ul>

            <p className="texto-entrada">Compra online y obten ayuda de nuestros especialistas</p>
        </div>
    )
}

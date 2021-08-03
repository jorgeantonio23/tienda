import React, {useContext }from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { UserContext } from "./UserContext";


export const NavBar = () => {

    const {  currentUser } = useAuth();
    //  const [email, setEmail] = useState("");
    console.log(currentUser);

    const { estadoGeneral } = useContext(UserContext);
    console.log(estadoGeneral)

    const { count } = estadoGeneral;
    console.log(count)


    

    return (
        <div>
            <ul>
            
                <i className="fab fa-apple"></i>
                <li> <NavLink  to="./">Home</NavLink > </li>
                <li><NavLink  to="./Products">Products</NavLink ></li>
                <li> <NavLink to="./Administrador">Administrador</NavLink ></li>
                {currentUser && <li className="usuario-activo">{currentUser.email }</li>}
                {/* <li><NavLink to="./SeeProducts">view</NavLink></li> */}
                <div className="iconos">
                <i className="fas fa-search"></i> 
                <i className="fas fa-cart-plus"></i>
                </div>
               
            </ul>

            <p className="texto-entrada">Compra online y obten ayuda de nuestros especialistas</p>
        </div>
    )
}

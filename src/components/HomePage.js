import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router';

export const HomePage = () => {

    const { login } = useAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password)
            history.push('./Administrador')
        } catch (error) {
            setError('Wrong Credentials');
            console.log(Error)
            setTimeout(() => {
                setError('')
            },1500)
        }
    }

    return (
        <div className="hero-image">
           <p className="hero-paragraph">Visitanos y obten espectaculares descuentos</p>
        
           <div className="contenedor-principal-login">

                  <div className="container-cards-login">

                       <div className="carta-login">
                           
                           <div className="iniciar-sesion">
                               <div className="usuario">
                                   <p>Usuario</p>
                                   <input id="email" type="text" onChange={handleEmail}/> 
                               </div>

                               <div className="usuario-contraseña">
                                   <p>Contraseña</p>
                                   <input id="contraseña" type="password" onChange={handlePassword}/>
                               </div>
                               
                            </div>


                             <form className="botones-login form-login" onSubmit={hanldeSubmit}>
                                 <button  className="btn-login" type="submit" placeholder="jddcnsc" >Iniciar Sesion</button>
                                 <button type="submit" className="btn-login" placeholder="jasncjac">Registrarse</button>
                             </form>     
                             <p className="entrar">Login</p>
                        </div>
                   </div> 
                </div>
            </div>
        
        
    )
}

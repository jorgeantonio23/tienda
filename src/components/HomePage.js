import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router';

export const HomePage = () => {

    const { login, logout } = useAuth();
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
            setError(<h2 className="mensaje-error"> <i class="fas fa-exclamation-triangle"></i> Wrong Credentials</h2>);
            console.log(Error)
            setTimeout(() => {
                setError('')
            },1500)
        }
  }

   const handleLogout = async () => {
     try {
       await logout();
     } catch (error) {
       setError('Server error')
     }
   }

  console.log(email, password)
 // console.log(currentUser.email)
  
   



    return (
      <div className="hero-image">
        {/* {currentUser && <h2>{ currentUser.email }</h2>} */}
         <p className="hero-paragraph">
          Visitanos y obten espectaculares <br></br> descuentos .....
        </p>

        <div className="contenedor-principal-login">
          <div className="container-cards-login">
            {error && <p className="error">{ error }</p> }
            <div className="carta-login">
              <i className="far fa-user"></i>
              <p className="titulo-carta">Sign In</p>
              <div className="iniciar-sesion">
                <div className="usuario">
                  <input id="email" type="text" onChange={handleEmail} />
                </div>

                <div className="usuario-contraseña">
                  <input
                    id="contraseña"
                    type="password"
                    onChange={handlePassword}
                  />
                </div>
              </div>

              <form
                className="botones-login form-login"
                onSubmit={hanldeSubmit}
              >
                <button className="btn-login" type="submit">
                  Iniciar Sesion
                </button>
                {/* <button type="submit" className="btn-login" placeholder="jasncjac">Registrarse</button> */}
              </form>
               <button className="button-logout" onClick={handleLogout}>Log Out</button> 
              {/* <p className="entrar">Login</p> */}
              <h3 className="loguearse">Or login With</h3>
              <div className="contenedor-iconos">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-google-plus-g"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

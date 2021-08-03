import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import '../firebase';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useHistory } from "react-router";







export const Cards = ({ equipo, esactivo = false, setShow }) => {

  
  const {  currentUser } = useAuth();
  //  const [email, setEmail] = useState("");
  console.log(currentUser);

  // const { estadoGeneral } = useContext(UserContext);
  // console.log(estadoGeneral);
  
  console.log(setShow)

  console.log(equipo)
  console.log(esactivo)


  //const { borrarArticulo } = useContext(UserContext);
  const { verArticulo} = useContext(UserContext);

  console.log(verArticulo)



 
  console.log(esactivo)

  
  
  
 
  const handleDelete = (id) => {
   
      db.collection('equipos').doc(id).delete().then(function () {
        console.log(id);
      }).catch(function (error) {
        console.error("Error al eliminar el documento:",  error)
      })
   };

  

 
  


  const verEquipo = () => {

     verArticulo(equipo)
      
   
  }

 
  const history = useHistory();

  
  const actualizar = () => {

    //  esactivo = true;
    //  console.log(esactivo);
    verArticulo(equipo);
    
    console.log('Producto actualizado', equipo)
    history.push('/Administrador')

  }

  const { estadoGeneral } = useContext(UserContext);

  const { equipoActivo } = estadoGeneral;
  console.log(equipoActivo);
   
  
  

  

//console.log(equipo)
  
  return (
    <div className="card">
      <div className="card-image">
        <img src={`${equipo.imagenes}`} alt="imagen" />
      </div>
      <div className="card-text">
        <span className="date">4 days ago</span>
        <h2>{equipo.titles}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
          temporibus omnis illum maxime quod deserunt eligendi dolor
        </p>
      </div>
      <div className="card-stats">
        <div className="stat verEquipo">
          <div className="value">
            <button onClick={() => verEquipo(setShow(true))}>
              Ver Producto
            </button>
            {/* <button className="boton-delete btn" onClick={() => handleDelete(equipo.id)}>Delete</button> */}
          </div>
        </div>
        <div className="stat border">
          <div className="value">
            {currentUser && (
              <button
                className="boton-delete btn"
                onClick={() => handleDelete(equipo.id)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
        <div className="stat comprar">
          <div className="value">
            <button>Comprar</button>
          </div>
        </div>

        {/* {esactivo && <button className="actualizar" onClick={ () => actualizar(equipo.id)}>Actualizar</button>}  */}

       { currentUser && <button className="actualizar" onClick={ () => actualizar(equipo.id)}>Actualizar</button>}  
      </div>
    </div>
  );
}


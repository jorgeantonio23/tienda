import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from './UserContext'
import '../firebase';
import { db } from '../firebase';
import { useForm } from '../hooks/useForm';
//import nuevaCarta from './FormInputs'
//import { Forminputs } from './FormInputs'








export const Cards = ({equipo, esactivo = false}) => {

  console.log(equipo)
  console.log(esactivo)


  //const { borrarArticulo } = useContext(UserContext);
  const { verArticulo } = useContext(UserContext);

  console.log(esactivo)

  
  
  
 
  const handleDelete = (id) => {
   
      db.collection('equipos').doc(id).delete().then(function () {
        console.log(id);
      }).catch(function (error) {
        console.error("Error al eliminar el documento:",  error)
      })
   };

  let history = useHistory()

 
  


  const verEquipo = () => {


    verArticulo(equipo)
   
    history.push('/SeeProducts')
   
   
  }
  //  const productInfo = () => {
    
  //    console.log(equipo)
  //  }

  
  const actualizar = () => {

    //  esactivo = true;
    //  console.log(esactivo);

    console.log('Producto actualizado', equipo)
    history.push('/Administrador')

  }
   
  
  

  

//console.log(equipo)
  return (

        <div className="carta2">
            <div className="contenedor-principal" >

                <div className="container-cards">

                  <div className="carta">
                    <div>
              {/* <img className="imagenproducto" src={equipo.imagen} alt="imagen" /> */}
               <img className="imagenproducto" src={`${equipo.imagenes}`} alt="imagen"/> 
                    </div>
                    <div className="caracteristicas">
                       <h3 className="titulo-del-producto">{equipo.titles}</h3>
                       <p className="descripcion-producto">{equipo.descripcions}</p>
                       <p className="precio-producto">{equipo.precios}</p>
                    </div>
                     <button className="boton-ver btn"  onClick={ () => verEquipo(equipo.id)}>Ver Producto</button>
                     <button  className="comprar">Comprar</button>
                     <button className="boton-delete btn" onClick={() => handleDelete(equipo.id)}>Delete</button>
                     {esactivo && <button onClick={ () => actualizar(equipo.id)}>Actualizar</button>}
                  </div>
                </div>          
            </div>
        </div>
    )
}

 // const usuarioRef = db.collection('equipos')

  // usuarioRef.doc(equipo.id)
  //   .update({
  //     activo: true
  //   })

  //   if (equipo.activo === true) {
  //      const actualizar = document('boton-active')
  //      console.log('EL ESUQIPO EST.querySelector('.boton-active2');
  //      actualizar.classList.removeA ACTIVO', equipo)
  // }
    
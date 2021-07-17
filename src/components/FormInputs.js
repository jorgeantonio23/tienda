import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import {useForm} from '../hooks/useForm'
import { UserContext } from './UserContext';
import '../firebase';
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
//import { UserContext } from './UserContext';
//import { types } from './types';
//import { Card } from './Card';
/*import { CardAdministrador } from './CardAdministrador';
import {Card} from './Card'*/


//Proveer informacion del useContext




   
export const Forminputs = () => {

  const { estadoGeneral } = useContext(UserContext)
  console.log(estadoGeneral)

  const { equipoActivo } = estadoGeneral
  console.log(equipoActivo)

  const {imagenes, precios, descripcions, titles} = equipoActivo
   
     
  

  
  const [formValues, handleInputChange] = useForm({
    imagen: imagenes,
    title: titles,
    precio: precios,
    descripcion: descripcions,
    id: '',
   
  });

  
  /*const word = useContext(UserContext)
  console.log(word)*/


 

 


  const {imagen, title, precio, descripcion, activo} = formValues; 
 //console.log(formValues);
 //console.log(useProducts)
  
  //const { imagen, title, precio, descripcion }   = formValues
  //console.log(state)

  

  const nuevaCarta = {
    imagenes: formValues.imagen,
    titles: formValues.title,
    precios: formValues.precio,
    descripcions: formValues.descripcion,
    activo
  //  id: doc.id
    
  }

  console.log(nuevaCarta)

  

  //console.log(nuevaCarta)

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('funciona')

    

      db.collection('equipos')
        .add(nuevaCarta)
        console.log(nuevaCarta)
    


      db.collection('equipos').onSnapshot((querySnapShot) => {
       const docs = [];
       querySnapShot.forEach((doc) => {
         docs.push({ ...doc.data(), id: doc.id })
         console.log(docs)
       })       
      })
    
    
      // db.collection('equipos')
      //   .add(nuevaCarta)
      //   console.log(nuevaCarta)

    // nuevoArticulo(nuevaCarta)
    // history.push('/Products');

   

    
     //console.log(crearArticulo)
     //console.log(nuevaCarta)
     // console.log('submited');
     //console.log(nuevaCarta); 
     //borrarArticulo(nuevaCarta)    
  }

 

   const update = () => {
    //  db.collection('equipos').doc(equipoActivo).update({

    //    imagenes: formValues.imagen,
    //    titles: formValues.title,
    //    precios: formValues.precio,
    //    descripcions: formValues.descripcion
     

    //  })
     console.log(123)
   }

  //console.log(formValues)
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="contenedor-pregunta">
            <label>Url Imagen del Producto</label>

            <div className="inputs">
              <input
                type="text"
                placeholder="https://imagen.com"
                autoComplete="off"
                value={imagen}
                name="imagen"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="contenedor-pregunta">
            <label> Nombre del Producto </label>

            <div className="inputs">
              <input
                className="input-producto"
                name="title"
                value={title}
                type="text"
                placeholder="Apple Watch"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="contenedor-pregunta">
            <label className="label-precio">Precio Producto</label>

            <div className="inputs">
              <input
                className="input-precio"
                name="precio"
                type="text"
                value={precio}
                placeholder="$10,000"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="contenedor-pregunta">
            <label>Descripcion del producto</label>

            <div className="inputs">
              <input
                type="text"
                name="descripcion"
                value={descripcion}
                placeholder="Este producto...."
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <input className="boton-formulario" type="submit" value="send" />

          <input className="boton-formulario" type="submit" onClick={update} value="update" />

        </form>
      </>
    );
}





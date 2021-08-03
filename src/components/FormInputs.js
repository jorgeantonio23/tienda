import React, { useContext, useRef, useState } from 'react'
import {useForm} from '../hooks/useForm'
import { UserContext } from './UserContext';
import '../firebase';
import { db } from '../firebase';
import { useHistory } from "react-router";
import ModalUpdate from './ModalUpadate';





   
export const Forminputs = () => {

  const [show, setShow] = useState(false)

  const { estadoGeneral } = useContext(UserContext);

  const history = useHistory();
  

  const { equipoActivo } = estadoGeneral
  console.log(equipoActivo)

  const { imagenes, precios, descripcions, titles } = equipoActivo
  console.log(imagenes)
   
  
  const [formValues, handleInputChange] = useForm({
    imagen: imagenes,
    title: titles,
    precio: precios,
    descripcion: descripcions,
    id: '',
   
  });

 
 

  
  
  /*const word = useContext(UserContext)
  console.log(word)*/


 

 


  const { imagen, title, precio, descripcion } = formValues;
  

  //console.log(formValues);
  //console.log(useProducts)
  
  //const { imagen, title, precio, descripcion }   = formValues
  //console.log(state)

  

  const nuevaCarta = {
    imagenes: formValues.imagen,
    titles: formValues.title,
    precios: formValues.precio,
    descripcions: formValues.descripcion,
    //  id: doc.id
    
  }

  
  

  console.log(nuevaCarta)

  // const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // formRef.current.reset();
    
  }

   const handleSend = () => {

      db.collection("equipos").add(nuevaCarta);
     console.log(nuevaCarta);
    
      db.collection("equipos").onSnapshot((querySnapShot) => {
        const docs = [];
        querySnapShot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          console.log(docs);
        });
      });

   }

  const update = () => {

    if (equipoActivo.titles !== formValues.title) {
       db.collection("equipos").add(nuevaCarta);
       console.log(nuevaCarta);

       history.push("/Products");
    }

      //  db.collection("equipos").add(nuevaCarta);
      //  console.log(nuevaCarta);

      //  history.push("/Products");


    
  }

 
  
   const handleDelete = () => {
     estadoGeneral.equipoActivo = {};
     console.log(estadoGeneral);
     history.push('/Products')
   }

 
  // console.log(formValues.descripcion)
  // formValues.descripcion = '';
  
    return (
      <>
        <form className="formInputs"  onSubmit={handleSubmit}>
          <div className="contenedor-pregunta">
            <label>Url Imagen del Producto</label>

            <div className="inputs">
              <input
                className="1"
                type="text"
                placeholder="https://imagen.com"
                autoComplete="off"
                value={imagen}
                name="imagen"
                onChange={handleInputChange}
              />
            </div>

            <label>Nombre Producto</label>
            <div className="inputs">
              <input
                className="input-producto 1"
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

            <label>Descripcion</label>
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

          <div className="contenedor-inputs">
            <button className="boton-formulario" onClick={() => handleSend()}>
              Send
            </button>

            <button className="boton-formulario" onClick={ () => update(setShow(true))}>Update</button>

            <button className="boton-formulario cancel" onClick={handleDelete}></button>
          </div>
        </form>

         {equipoActivo.titles === formValues.title && <ModalUpdate onClose={ () => setShow(false) }show={show}/> } 
      </>
    );
}





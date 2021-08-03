//ESTRUCTURA DE UNA SOLA CARTA
import React, { useContext, useState } from 'react'
import { Cards } from './Cards'
import Modal from './Modal';
//import { DescripcionProducto } from './DescripcionProducto'
//import { useProducts } from '../Store/E-comerce/hook'

import { UserContext } from './UserContext'

//import types from './types'
/*import { Cards } from './Cards'
import { Forminputs } from './FormInputs'*/


export const Card = () => {

    const [show, setShow] = useState(false)

    
    
    //const [items, setItems] = useState([]); //items inicia como un arreglo vacio, setItems corresponde
    //a la actualizacion del estado inicial []

    const {datosEquipos} = useContext(UserContext);
    //console.log(esactivo)
    
   
    
    console.log(datosEquipos)
   // console.log(equipoActivo)
 

   
   
    //const {borrarArticulo} = useContext(UserContext)
    // const { equipos, equipoActivo } = estadoGeneral
    // console.log(equipoActivo)

//    useEffect(() => {
//     setItems(equipos); //SE EJECUTA CADA VEZ QUE HAYA UN RENDERIZACION DEL COMPONENTE
//    }, [equipos]);// CADA VEZ QUE EQUIPOS CAMBIE ENTONCES SE VOLVERAN A MOSTRAR LOS EQUIPOS + el muevo equipo agregado a el estado inicial


  
    return (

       <div>
            
           
           
           {
        
                datosEquipos.map(equipo => {
                    console.log(equipo)
                    return <Cards key={equipo.titles} equipo={equipo} setShow={setShow}/>
                })
                
            }
            
            <Modal onClose={() => setShow(false)} show={show} />


       </div>

   
    )

}




/*
onClick={ () => dispatch (crearArticulo(newCard))}
onClick={ () => dispatch(deleteArticulo(newCard.id))}

*/

/*

 <div className="container-cards">

       

       <div className="carta">
            <div>
                <img className="imagenproducto" src={imagen} alt="" ></img>
            </div>
            <div className="caracteristicas">
                <h3 className="titulo-del-producto">{title}</h3>
                <p className="descripcion-producto">Lorem ipsum dolor sit amet consectetur adipiscing elit, nisl ultrices purus montes dui imperdiet, ullamcorper mi donec tellus dis leo.</p>
                <p className="precio-producto">{precio}</p>
            </div>


            <div className="botones">
            <button className="boton-ver "type="submit" >Ver Producto</button>
            <button type="submit" className="comprar"onClick={click}>Comprar</button>
            </div>
            
        </div>

    </div> 
    

*/


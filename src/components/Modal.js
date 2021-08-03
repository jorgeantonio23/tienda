import React, { useContext } from 'react'
import { UserContext } from './UserContext'


const Modal = (props) => {


  const { estadoGeneral } = useContext(UserContext);
  console.log(estadoGeneral);
  
   
  
  
    
    const { equipoActivo } = estadoGeneral;
    console.log(equipoActivo)

     const { imagenes, precios, descripcions, titles } = equipoActivo
     console.log(imagenes, precios, descripcions, titles)

    if (!props.show) {
        return null
    }

    

    
    return (
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="offer">
              Discount offer: <span className="porcentaje-offer">30% off</span>
            </h3>
            <i onClick={props.onClose} class="fas fa-times"></i>
          </div>
          <div className="modal-body">
            <div>
              <img className="modal-image zoom" src={`${imagenes}`} alt="imagen"/>
            </div>
            <div className="descripcion">
              <h3 className="descripcion-titulo">{titles}</h3>
              <h3 className="descripcion-precio"><i class="fas fa-dollar-sign"></i>{precios}</h3>
              <p className="descripcion-texto"><i class="fas fa-audio-description"></i>{descripcions}</p>
            </div>
          </div>
          
          <div className="modal-footer">
          <button onClick={props.onClose} className="button-buy">
            GET IT NOW <i class="far fa-gem"></i>
          </button>
          <button onClick={props.onClose} className="button-close">
            NO THANKS
          </button>
        </div>


        

          {/* <button onClick={props.onClose} className="button-close">
            Close
          </button> */}
        </div>
      </div>
    );
}

export default Modal
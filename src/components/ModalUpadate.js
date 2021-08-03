import React from 'react'

const ModalUpdate = props => {

    if (!props.show) {
        return null
    }

    return (
      <div className="modal ">
        <div className="modal-content modal-update">
          <div className="modal-header modal-header-update ">
            <h3 className="offer modal-update-warning">
              <i className="fas fa-exclamation-triangle"></i> Warning
            </h3>
          </div>
          <div className="modal-body modal-body-update">
            <i className="fas fa-exclamation-triangle"></i>
            <h4 className="texto-modal-update">
              EL PRODUCTO QUE ESTAS INTENTANDO ACTUALIZAR ACTUALMENTE YA EXISTE
              EN EL INVENTARIO
            </h4>
          </div>
          <button className="modal-button-update" onClick={props.onClose}>Aceptar</button>
        </div>
      </div>
    );
}

export default ModalUpdate
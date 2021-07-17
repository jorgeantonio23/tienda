import types from "../types"



export const crearArticulo = (item) => {
    return {
       type: types.productAdd,
       payload: item
        
    }
  }
  
export const  deleteArticulo = (equipo) => {
      return{
          type: types.delete,
          payload:equipo.id
      }   
}

export const viewProduct = (obj) => {
  return {
    type: types.view,
    payload:obj
  }
}



  

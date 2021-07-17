import {  useCallback,  useReducer } from 'react';
import { estadoInicial, productReducer } from './reducer';
import { crearArticulo, deleteArticulo, viewProduct } from './action';





export const useProducts = () => {


    //QUE ES EL ESTADO GENERAL?
    const [estadoGeneral, dispatch] = useReducer(productReducer, estadoInicial);



 const nuevoArticulo = useCallback(
     (item) => {
       dispatch(crearArticulo(item))  
     },
     [dispatch],
 )
   
 const borrarArticulo = useCallback(
     (equipo) => {
         dispatch(deleteArticulo(equipo))
     },
     [dispatch],
 )
 
    const verArticulo = useCallback(
        (obj) => {
            dispatch(viewProduct(obj))
        },
        [dispatch],        
 )
  
    

 
 

 


 return {
     estadoGeneral,
     nuevoArticulo,
     borrarArticulo,
     verArticulo
 }

 
 

}




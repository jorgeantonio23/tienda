//ESTA ES LA APLICACION 
import React, { useEffect, useState } from 'react'
import { AppRouter } from './AppRouter'
//import { Forminputs } from './components/FormInputs'
import { UserContext } from './components/UserContext'
import { useProducts } from './Store/E-comerce/hook'

import './firebase';
import { db } from './firebase';







export const App = () => {

    const { estadoGeneral, nuevoArticulo, borrarArticulo, verArticulo, equipoActivo } = useProducts();
    console.log(estadoGeneral)

    



    //const equiposRef = db.collection('equipos')

  

    const [datosEquipos, setDatosEquipos] = useState([]);


    const info = async () => {

        const array = [];
        const resp = db.collection('equipos');
        const data = await resp.get();
        data.forEach(articulo => {
            let id = articulo.id
            array.push({ ...articulo.data(), id });
            //console.log(articulo.id)
        })
         
         
        
        setDatosEquipos(array);
    }
    
    
     

    useEffect(() => {
        info();
    }, [])


    
    
   


    const store = {
        
        
        verArticulo,
        nuevoArticulo,
        borrarArticulo,
        datosEquipos,
        estadoGeneral,
        equipoActivo,
       
       

       
    };

  
    

     
    if (datosEquipos.length === 0) {
        return <h1>Loading...</h1>
    } else {
        return (
            
            <UserContext.Provider value={store}>
                <AppRouter />
            </UserContext.Provider>
        )
        
    }

    
    return (

       

        
      


        <> 
            
            <UserContext.Provider value={store}>    
               <AppRouter />
            </UserContext.Provider>
       
            
        </>    
            
        
        
       
    )
}

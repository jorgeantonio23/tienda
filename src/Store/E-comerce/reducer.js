import  types  from "../types"


 const items = []

export const estadoInicial = {

    equipos: items,
    equipoActivo: {}, //A QUE HACE REFERENCIA?
    
}


export const productReducer =  (state, action) => {

    console.log(state)
    switch (action.type) {
        case types.productAdd:
            console.log('action.payload', action.payload);
            console.log('state from reducer', state);

            return {
                ...state, //para que se necesita, si ya tengo el spred abajo
                equipos: [...state.equipos, action.payload] //PORQUE SE NECESITA EL SPRED DEL state.equipos
            }
        
           /* return [
                ...state,
                action.payload
            ]*/

        case types.delete:

            let equipoeliminado = state.equipos.filter(equipo => equipo.id !== action.payload)
            return {
                ...state,
                equipos: equipoeliminado
            }
            // return [
            //     //...initialState,
            //     ...state.filter(equipo => equipo.id !== action.payload),
            //     //...state
            // ]
        
        case types.view:
           

           

            //SE NECESITA HACER LA COPIA DE ...verProducto, para poder sacarla de el array en el que estaba
            return {
                ...state,
                equipoActivo: action.payload  //COMO SACAR EL OBJETO DE ESE OBJETO
            }
            // return [
            //     ...state.filter(equipo => equipo.id === action.payload)
            // ]
             
        default:
            return state
            
    }
}
import axios from 'axios'

import {
    GET_CRONOLOGIAS,
    GET_CRONOLOGIAS_OK,
    GET_CRONOLOGIAS_FAIL,

    AGREGAR_CRONOLOGIA,
    AGREGAR_CRONOLOGIA_OK,
    AGREGAR_CRONOLOGIA_FAIL,

    ELIMINAR_CRONOLOGIA, // Agrega el ActionType de eliminación
    ELIMINAR_CRONOLOGIA_OK, // Agrega el ActionType de eliminación exitosa
    ELIMINAR_CRONOLOGIA_FAIL // Agrega el ActionType de eliminación con error
  
} from './actionTypes'
    
export function actionGetCronologias(){
    return {
        type : GET_CRONOLOGIAS
    }
}


export function actionGetCronologiasOk(cronologias){
    return {
        type:GET_CRONOLOGIAS_OK,
        payload:cronologias
    }
}


export function actionGetCronologiasFail(error){
    return {
        type:GET_CRONOLOGIAS_FAIL,
        payload:error,
     }
}


export function getCronologias(){
    return async (dispatch) =>{
        dispatch(actionGetCronologias())
        try {
            const response = await axios.get("http://localhost:3000/cronologias")
             dispatch(actionGetCronologiasOk(response.data))
        } catch(error){
            dispatch(actionGetCronologiasFail(error))
        }
    }
}



// Acción para agregar una nueva cronología
export function actionAgregarCronologia() {
    return {
      type: AGREGAR_CRONOLOGIA
    };
  }
  
  export function actionAgregarCronologiaOk(cronologia) {
    return {
      type: AGREGAR_CRONOLOGIA_OK,
      payload: cronologia
    };
  }
  
  export function actionAgregarCronologiaFail(error) {
    return {
      type: AGREGAR_CRONOLOGIA_FAIL,
      payload: error
    };
  }
  
  export function agregarCronologia(cronologia) {
    return async (dispatch) => {
      dispatch(actionAgregarCronologia()); // Dispatch de la acción para indicar que se está realizando la operación
  
      try {
        // Llamada a API utilizando axios.post para agregar la cronología
        const response = await axios.post('http://localhost:3000/cronologias', cronologia);
        
        // Si la operación es exitosa, dispatch de la acción con los datos de la nueva cronología
        dispatch(actionAgregarCronologiaOk(response.data));
      } catch (error) {
        // Si ocurre un error, dispatch de la acción de error con el mensaje de error
        dispatch(actionAgregarCronologiaFail(error));
      }
    };
  }







  // Acción para eliminar una cronología
export function actionEliminarCronologia() {
  return {
      type: ELIMINAR_CRONOLOGIA
  };
}

export function actionEliminarCronologiaOk(cronologiaId) {
  return {
      type: ELIMINAR_CRONOLOGIA_OK,
      payload: cronologiaId
  };
}

export function actionEliminarCronologiaFail(error) {
  return {
      type: ELIMINAR_CRONOLOGIA_FAIL,
      payload: error
  };
}

export function eliminarCronologia(cronologiaId) {
  return async (dispatch) => {
      dispatch(actionEliminarCronologia()); // Dispatch de la acción para indicar que se está realizando la operación

      try {
          // Llamada a API utilizando axios.delete para eliminar la cronología
          await axios.delete(`http://localhost:3000/cronologias/${cronologiaId}`);

          // Si la operación es exitosa, dispatch de la acción con el ID de la cronología eliminada
          dispatch(actionEliminarCronologiaOk(cronologiaId));
      } catch (error) {
          // Si ocurre un error, dispatch de la acción de error con el mensaje de error
          dispatch(actionEliminarCronologiaFail(error));
      }
  };
}
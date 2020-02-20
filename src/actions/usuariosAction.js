import Axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/UsuariosTypes'

export const traerTodos = () => async(dispatch) => {
    dispatch({
        type: CARGANDO,
    })
    try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/users')    
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Información de usuario no disponible, intente más tarde: '+error.message
        })
    }
};
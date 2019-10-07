import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"

const initialStore ={  //esto es el estado
    counter:0,
    name:"silvana"
}  //es nuestro estado inicial, en un principio puede estar vacio

///reducer
export const reducer = (state= initialStore,  action)=> {
    switch(action.type){

        case "ADD_COUNTER":
        return Object.assign({}, state,{
            counter: state.counter+1
        });
        
        case "REMOVE_COUNTER":
        return Object.assign({}, state,{
            counter: state.counter-1
        })
        case "RESET_COUNTER":
        return Object.assign({}, state,{
            counter:0
        })

        default :
        return state;
    }
}



///action
export const addCounter=()=>dispatch=>{
    return dispatch({
        type:"ADD_COUNTER",
       
    })
}

export const removeCounter=()=>dispatch=>{
    return dispatch({
        type:"REMOVE_COUNTER"
    })
}

export const resetCounter= ()=>dispatch=>{
    return dispatch({
        type:"RESET_COUNTER"
    })
}


export function initializeStore(){  //aca se puede llamar de cualquier forma
    return createStore(reducer, initialStore,  applyMiddleware(thunkMiddleware)) //aca linkeamos el reducer al createstore pues es la funcion que vamos a usar
}

import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';


const Initialstate = {
    type : '',
    plan : [],
    order : [],
    customers : [],
    items : [],    
}

const reducer = (state=Initialstate,action) => {
    console.log(action)
    if(action.type === 'ADDPLAN'){
        return {...state, 
            type : 'ADDPLAN',
            plan : action.content, 
        }
    }
    if(action.type === 'ADDITEM'){
        return {...state, 
            type : 'ADDITEM',
            items : action.content, 
        }
    }
    if(action.type === 'ADDORDER'){
        return {...state, 
            type : 'ADDORDER',
            order : action.content, 
        }
    }
    if(action.type === 'ADDCUSTOMER'){
        return {...state, 
            type : 'ADDCUSTOMER',
            customers : action.content, 
        }
    }
}

// const reducer = createReducer(Initialstate,{
//     [addToDo]: (state, action) => {
        
//     },
//     [deleteToDo]: (state, action) => {

//     },
//     [updateToDo]: (state, action) => {

//     },
//     [readToDo]: (state, action) => {

//     }
// })


const store = createStore(reducer);

// export const actionCreators = {
//     addToDo,
//     deleteToDo,
//     updateToDo,
//     readToDo,
// }

console.log(reducer.state)

export default store;

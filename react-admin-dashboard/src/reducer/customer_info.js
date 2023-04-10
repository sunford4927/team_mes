import { Make_ID } from "../make";
// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'CUSTOMER_INFO/WRITE';
const CHECK = 'CUSTOMER_INFO/CHECK'; 
const DELETE = 'CUSTOMER_INFO/DELETE';
const UPDATE = 'CUSTOMER_INFO/UPDATE';


// Action Creator Function ( 액션 함수 생성 )
export const customerWrite = (data) => ({type : WRITE, data})
export const customerCheck = (data) => ({type : CHECK, data})
export const customerDelete = (data) => ({type : DELETE, data})
export const customerUpdate = (data) => ({type : UPDATE, data})


// init State ( 초기 상태 ) 
const Initialstate = {
    customer : [],
    content : [],
}
// Reducer function ( 리듀서 함수 )
export const customerReducer = (state=Initialstate,action) => {
    console.log(action)
    if(action.type === WRITE){
        return {...state, 
            type : WRITE,
            content : action.data, 
        }
    }
    if(action.type === CHECK){
        let data = Make_ID(action.data)
        return {...state, 
            type : CHECK,
            customer : data, 
        }
    }
    if(action.type === DELETE){
        return {...state, 
            type : 'ADDORDER',
            order : action.content, 
        }
    }
    if(action.type === UPDATE){
        return {...state, 
            type : 'ADDCUSTOMER',
            customers : action.content, 
        }
    }
    return state
}


// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
// Action Creator Function ( 액션 함수 생성 )
// init State ( 초기 상태 ) 
// Reducer function ( 리듀서 함수 )



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



// export const actionCreators = {
//     addToDo,
//     deleteToDo,
//     updateToDo,
//     readToDo,
// }




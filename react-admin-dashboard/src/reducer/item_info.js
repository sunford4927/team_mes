import { Make_ID } from "../make";

// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'ITEM_INFO/WRITE';
const CHECK = 'ITEM_INFO/CHECK';
const UPDATE = 'ITEM_INFO/UPDATE';
const DELETE = 'ITEM_INFO/DELETE';


// Action Creator Function ( 액션 함수 생성 )
export const itemWrite = (data) => ({type: WRITE, data})
export const itemCheck = (data) => ({type: CHECK, data})
export const itemDelete = (data) => ({type: DELETE, data})
export const itemUpdate = (data) => ({type: UPDATE, data})


// init State ( 초기 상태 ) 
const Initialstate = {
    item : [],
};


// Reducer function ( 리듀서 함수 )
export const itemReducer = (state=Initialstate, action) =>{
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            let data = Make_ID(action.data)
            return {
                ...state, 
                type : CHECK,
                item : data, 
                };
        case DELETE:
            return {};
        case UPDATE:
            return {};
        default:
            return state
    }
};
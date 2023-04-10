
// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'NOTICE_INFO/WRITE';
const CHECK = 'NOTICE_INFO/CHECK';
const UPDATE = 'NOTICE_INFO/UPDATE';
const DELETE = 'NOTICE_INFO/DELETE';


// Action Creator Function ( 액션 함수 생성 )
export const noticeWrite = (data) => ({type: WRITE, data})
export const noticeCheck = (data) => ({type: CHECK, data})
export const noticeDelete = (data) => ({type: DELETE, data})
export const noticeUpdate = (data) => ({type: UPDATE, data})


// init State ( 초기 상태 ) 
const Initialstate = {
    notice : [],
};


// Reducer function ( 리듀서 함수 )
export const noticeReducer = (state=Initialstate, action) =>{
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            return {
                ...state,
                notice : action.data 
                };
        case DELETE:
            let data = state.notice.filter(item => item.id !== action.data)
            return {
                ...state,
                notice : data
            };
        case UPDATE:
            return {};
        default:
            return state
    }
};
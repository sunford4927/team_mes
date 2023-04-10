
// Action type ( 액션 타입 )
// WRITE, CHECK, DELETE, UPDATE
const WRITE = 'MONITORING_INFO/WRITE';
const CHECK = 'MONITORING_INFO/CHECK';
const UPDATE = 'MONITORING_INFO/UPDATE';
const DELETE = 'MONITORING_INFO/DELETE';


// Action Creator Function ( 액션 함수 생성 )
export const monitoringWrite = (data) => ({type: WRITE, data})
export const monitoringCheck = (data) => ({type: CHECK, data})
export const monitoringDelete = (data) => ({type: DELETE, data})
export const monitoringUpdate = (data) => ({type: UPDATE, data})


// init State ( 초기 상태 ) 
const Initialstate = {
    monitoring : [],
    line1 : [],
    line2 : [],
    line3 : [],
    state : false,
};


// Reducer function ( 리듀서 함수 )
export const monitoringReducer = (state=Initialstate, action) =>{
    switch(action.type){
        case WRITE:
            return {};
        case CHECK:
            let content = action.data.slice(324,452)
            let line1 = []
            let line2 = []
            let line3 = []
            for(let i = 0 ; i < 125 ; i +=3){
                line1.push(content[i])
                line2.push(content[i+1])
                line3.push(content[i+2])
            }
            return {
                ...state,
                monitoring : content,
                line1: line1,
                line2: line2,
                line3: line3 
                };
        case DELETE:
            return {};
        case UPDATE:
            return {};
        default:
            return state
    }
};
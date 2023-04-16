import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from "./index";
import storage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key : 'root',
    storage : storageSession,
    timeout : null,
    // whitelist : ["staffReducer"]
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default {store, persistor};


// import { createStore } from "redux";
// import { persistStore, persistReducer } from 'redux-persist'
// import { rootReducer } from "./index";
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key : 'root',
//     storage : storage,
//     timeout : null
// }

// export const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(persistedReducer)
// export const persistor = persistStore(store,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export default {store, persistor};



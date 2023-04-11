import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { Provider } from 'react-redux';
import './index.css'
import { store,persistor } from "./reducer/configuerStore"
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor = {persistor} loading={null}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>,
  document.getElementById('root')
  );
  
  

  // const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from "./features/Userslice";
import thunk from 'redux-thunk';
import { AuthContextProvider } from './component/auth-context';
import { BrowserRouter } from "react-router-dom";

export const store = createStore(Reducer , {},composeWithDevTools(applyMiddleware(thunk)))




ReactDOM.render(
  
<AuthContextProvider> 
    <Provider store={store}>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
           <App />
       </BrowserRouter>
    </Provider>
</AuthContextProvider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

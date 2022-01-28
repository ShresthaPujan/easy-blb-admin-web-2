
import './App.css';
import {useContext} from 'react'

import Dashboard from './component/Dashboard';
import { BrowserRouter ,Routes, Route, Link,Navigate } from "react-router-dom";
import Login from './component/Login';
// import Protected from './component/Protected';
import { useSelector } from 'react-redux'
import { selectUser } from './features/Userslice';
import Sidebarone from './component/Sidebarone';
import Content from './component/Content';
import { computeHeadingLevel } from '@testing-library/react';
import AuthContext from './component/auth-context';
import Notfound from './Notfound';

function App() {
  //const user = useSelector(selectUser);
  const auth = localStorage.getItem("userInfo");
  const authCtx= useContext(AuthContext);

  return (
    <div className="App">
         <BrowserRouter>
              <Routes>
                  {!auth &&( <Route path="/login" element={<Login />} />)} 
                  {authCtx.isLoggedIn && (  <Route path="/" element={<Dashboard />} />)} 
                  <Route path="/sidebar" element={<Sidebarone/>} />
                  <Route path="/content" element={<Content/>} />
                  <Route path="*" element={<Notfound />}
    />
              </Routes>
            
            </BrowserRouter>
           
 
      
    </div>
  );
}

export default App;

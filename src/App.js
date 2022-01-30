import React ,{Suspense} from 'react';
import './App.css';
import {useContext} from 'react'

import Dashboard from './component/Dashboard';
import {Routes, Route } from "react-router-dom";
import Login from './component/Login';
// import Protected from './component/Protected';
import { useSelector } from 'react-redux'
import { selectUser } from './features/Userslice';
import Sidebarone from './component/Sidebarone';
import Content from './component/Content';
import { computeHeadingLevel } from '@testing-library/react';
import AuthContext from './component/auth-context';
import Notfound from './Notfound';
import Layout from './component/Layout';
import Test from './component/Test';
import Profile from './component/Profile';

function App() {
  //const user = useSelector(selectUser);
  const auth = localStorage.getItem("userInfo");
  const authCtx= useContext(AuthContext);
   
  const lazyProfile = React.lazy(()=> import('./component/Profile'));
  const lazyContent = React.lazy(()=> import('./component/Content'));
  return (
        <>
         
              <Routes>
                    {!auth &&( <Route path="/login" element={<Login />} />)} 
                    <Route path="*" element={<Notfound />}/>
              </Routes>
                  
                  {authCtx.isLoggedIn && ( 
                    <Layout>
                   
                      <Routes>
                        <Route path="/" element={ <Suspense fallback={<div>asdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffasdfasfasfdasfsadf....</div>}> <Content /> </Suspense>} />
                        <Route path="/content" element={<Content/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/test" element={<Test/>} />
                      </Routes>
                     
                  </Layout>
                  )}
           </>
   
      
  );
}

export default App;

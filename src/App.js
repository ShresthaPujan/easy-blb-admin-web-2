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
import Content from './CooperativePage/Content';
import { computeHeadingLevel } from '@testing-library/react';
import AuthContext from './component/auth-context';
import Notfound from './Notfound';
import Layout from './component/Layout';
import Test from './component/Test';
import Profile from './component/Profile';
import CooperativeState from './component/Cooperative/CooperativeState';
import NotificationState from './component/Notification/Notificationstate';
import Collector from './CollectorPage/Collector';
import CollectorState from './component/Collector/CollectorState';
import Notification from './component/NotificationPage/Notification';
import AddNewpopup from './CooperativePage/AddNewpopup';

function App() {
  //const user = useSelector(selectUser);
  const auth = localStorage.getItem("userInfo");
  const authCtx= useContext(AuthContext);
  
  
  return (
        <>
         
              <Routes>
              <Route path="/login" element={<Login />} />
                    {!auth &&( <Route path="/login" element={<Login />} />)} 
                    <Route path="*" element={<Notfound />}/>
              </Routes>
                  
                  {authCtx.isLoggedIn && ( 
                    <CooperativeState>
                       <CollectorState>
                        <NotificationState>
                          <Layout>
                            <Routes>
                              <Route path="/" element={  <Content /> }/>
                              <Route path="/cooperative" element={<Content/>} />
                              <Route path="/collector" element={<Collector/>} />
                              <Route path="/notification" element={<Notification/>} />
                              <Route path="/profile" element={<Profile/>} />
                              <Route path="/test" element={<Test/>} />
                            </Routes>      
                        </Layout>
                        </NotificationState>
                    </CollectorState>
                  </CooperativeState>
                 )}
           </>
   
      
  );
}

export default App;

import React from 'react';
import Footer from './Footer';
import '../style.css';
import  { useEffect , useState ,useContext} from 'react'
import cooperativeContext from './Cooperative/cooperativeContext';
import Content from './Content';
import Sidebarone from './Sidebarone';
import Uppersidebar from './Uppersidebar';
// import { useContext } from 'react';
// import { useLocation ,Navigate} from 'react-router-dom';
// import AuthContext from './auth-context';

export default function Dashboard() {

  const context = useContext(cooperativeContext)
  const {getCoperative,cooperative,setCoperativeEdit,alert,setAlert} = context;
  console.log(cooperative)
  return  <>
    <div className="container-fluid">
    This is dashboard
     </div>
    </>
  ;
}

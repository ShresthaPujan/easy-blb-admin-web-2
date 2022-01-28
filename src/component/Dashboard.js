import React from 'react';
import Footer from './Footer';
import '../style.css';
import Content from './Content';
import Sidebarone from './Sidebarone';
import Uppersidebar from './Uppersidebar';
// import { useContext } from 'react';
// import { useLocation ,Navigate} from 'react-router-dom';
// import AuthContext from './auth-context';

export default function Dashboard() {

  
  return  <>
    <div className="container-fluid">
        <div className="row">
          <Sidebarone />
          <div  className="col-lg-10" id="upper-nav">
                <Uppersidebar/>
                <Content/>
          </div>
     </div>
     </div>
     <Footer/>
    </>
  ;
}

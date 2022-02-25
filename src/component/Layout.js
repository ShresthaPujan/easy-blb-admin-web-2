import React, { Fragment ,useContext,useEffect} from 'react';
import Sidebarone from './Sidebarone'
import Uppersidebar from './Uppersidebar'
import Footer from './Footer';
import { Alert } from './Alert';
import cooperativeContext from './Cooperative/cooperativeContext';
import Sidebarsmall from './Sidebarsmall';
import useWindowDimensions from './hooks/UsewindowDimension.js';

export default function Layout(props) {
  const context = useContext(cooperativeContext)
  const {alert,setAlert,menutoggle,setMenutoggle } = context;

  const { height, width } = useWindowDimensions();
 
  useEffect(() => {
    
    if(width < 1100){
      setMenutoggle(true)
    }
    else{
      setMenutoggle(false)
    }

  }, [width]);
  

  return <Fragment>
  
        <div className="container-fluid main-wrapper " >
          <div className="row">
          
              <div className={menutoggle ?"hide ":"col-lg-2"} id="side-nav"> 
              {/* id= {menutoggle ? "halfside-nav" :"side-nav"} */}
              {/* {menutoggle ? <Sidebarsmall/> :  <Sidebarone />} */}
              <Sidebarone />
                </div>
               
                <div className={menutoggle ? "col-lg-12 col-md-12  col-sm-12 col-12  d-flex flex-column min-vh-100 togglewidthsmall" : "col-lg-10 col-md-10 col-sm-10 col-10 d-flex flex-column min-vh-100 togglewidthlarge"} id="upper-nav">
                      <Uppersidebar/>
                          {props.children}
                      <div  className="mt-auto">
                        <Footer/>
                    </div>    
                </div>
                
          </div>
        
      </div>

     <div className={`${alert.fade} col-lg-12 col-md-12 col-sm-12`}>
        <Alert trigger={alert}/>
    </div>


  </Fragment>;
}

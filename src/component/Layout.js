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
    if(width < 1120){
      setMenutoggle(true)
    }
    else{
      setMenutoggle(false)
    }

  }, [width]);
  

  return <Fragment>

      <div className="container-fluid main-wrapper" style={{position:"relative"}}>
        <div className="row">
        
            <div className={menutoggle ?"col-lg-1 col-md-1 col-sm-1 col-1":"col-lg-2 col-md-1 col-sm-1 col-1"} id= {menutoggle ? "halfside-nav" :"side-nav"}> 
            {menutoggle ? <Sidebarsmall/> :  <Sidebarone />}
              </div>
              <div  className={menutoggle ? "col-lg-11 col-md-11  col-sm-11 col-11" : "col-lg-10 col-md-11 col-sm-11 col-11"} id="upper-nav">
                    <Uppersidebar/>
                        {props.children}
                    
              </div>
         </div>
     </div>
     <Footer/>
     <div className="col-lg-12 col-md-12 col-sm-12">
        <Alert trigger={alert}/>
    </div>


  </Fragment>;
}

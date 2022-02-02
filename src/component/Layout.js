import React, { Fragment ,useContext} from 'react';
import Sidebarone from './Sidebarone'
import Uppersidebar from './Uppersidebar'
import Footer from './Footer';
import { Alert } from './Alert';
import cooperativeContext from './Cooperative/cooperativeContext';

export default function Layout(props) {
  const context = useContext(cooperativeContext)
  const {alert,setAlert} = context;
  return <Fragment>
      <div className="container-fluid main-wrapper" style={{position:"relative"}}>
        <div className="row">
        
            <div className="col-lg-2 col-md-1 col-sm-1" id="side-nav"> 
              <Sidebarone />
              </div>
              <div  className="col-lg-10 col-md-11 -col-sm-11" id="upper-nav">
                    <Uppersidebar/>
                        {props.children}
                    <Footer/>
              </div>
         </div>
     </div>
     <div className="col-lg-12 col-md-12 col-sm-12">
        <Alert trigger={alert}/>
    </div>


  </Fragment>;
}

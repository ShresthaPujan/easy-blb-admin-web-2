import React, { Fragment } from 'react';
import Sidebarone from './Sidebarone'
import Uppersidebar from './Uppersidebar'
import Footer from './Footer';

export default function Layout(props) {
  return <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Sidebarone />
          <div  className="col-lg-10 col-md-10 -col-sm-10" id="upper-nav">
                <Uppersidebar/>
                    {props.children}
          </div>
     </div>
     </div>
     <Footer/>
  </Fragment>;
}

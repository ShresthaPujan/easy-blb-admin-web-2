import React from 'react';
import Sidebarone from './Sidebarone';
import Uppersidebar from './Uppersidebar';

export default function Profile() {
  return <div className="container-fluid">
  <div className="row">
    <Sidebarone />
    <div  className="col-lg-10" id="upper-nav">
          <Uppersidebar/>
          This is profile
    </div>
</div>
</div>;
}

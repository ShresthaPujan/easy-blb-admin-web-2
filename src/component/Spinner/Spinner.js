import React from 'react';
import loading from './loading.gif'
export default function Spinner() {
  return <div className=" text-center d-flex  justify-content-center align-items-center" style={{margin:"0 auto",width:"120px"}}>
        <img src={loading} alt="" />
    </div>;
}

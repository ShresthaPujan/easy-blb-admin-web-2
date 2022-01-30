import React from 'react';
import loading from './loading.gif'
export default function Spinner() {
  return <div>
    <div className=" text-center d-flex  justify-content-center align-items-center">
        <img src={loading} alt="" />
    </div>
  </div>;
}

import React ,{useContext} from 'react';
import cooperativeContext from './Cooperative/cooperativeContext';
export const Alert = (props) => {

  const context = useContext(cooperativeContext)
  const {setAlert,setLogout,Alert} = context;
  const handleClose =()=>{
      setAlert({
        fade:'fade-default'
      })
  }
  const logoutConform = () =>{
    setLogout(true)
    console.log("test")
  }

  return<div className="popUP container-fluid  col-lg-12 col-md-12 col-sm-12 col-xs-12">   
            <div className="popup-inner-alert container col-lg-12 col-md-12 col-sm-12 col-xs-12  p-4 ">
                <button className='btn closebtn' onClick={handleClose} ><i className="bi bi-x"></i></button>
                <div className='text-center col-lg-12 col-md-12 col-sm-12 col-xs-12  p-4'>
                  Do You want to logout?
                  <div className='p-3'>
                    <button className="btn btn-primary mx-2" onClick={logoutConform}>Logout</button>
                    <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
                  </div> 
                </div>
             </div>
       </div>
};

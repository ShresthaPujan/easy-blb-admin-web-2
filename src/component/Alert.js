import React ,{useContext} from 'react';
import cooperativeContext from './Cooperative/cooperativeContext';
export const Alert = (props) => {

  const context = useContext(cooperativeContext)
  const {setAlert,setLogout} = context;
  const handleClose =()=>{
      setAlert(false)
  }
  const logoutConform = () =>{
    setLogout(true)
    console.log("test")
  }

  return (props.trigger)?<div className="popUP container-fluid  col-lg-12 col-md-12 col-sm-12 col-xs-12">   
            <div className="popup-inner container  p-4 ">
                <button className='btn closebtn' onClick={handleClose} ><i className="bi bi-x"></i></button>
                <div>
                  Do You want to logOut?
                  <div>
                    <button className="btn btn-primary" onClick={logoutConform}>Logout</button>
                    <button className="btn btn-danger">Cancel</button>
                  </div> 
                </div>
             </div>
       </div>:"";
};

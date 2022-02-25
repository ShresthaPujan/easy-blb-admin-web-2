import React ,{useContext} from 'react';
import cooperativeContext from './Cooperative/cooperativeContext';
export const Alert = (props) => {

  const context = useContext(cooperativeContext)
  const {setAlert,setLogout,alert,setresetPassword,resetPassword} = context;
  const handleClose =()=>{
      setAlert({
        fade:'fade-default',
        msg:"",
        type:""
      })
  }

  const logoutConform = () =>{
    setLogout(true)
  }
  const ConformReset = () =>{
    console.log("resethere")
    setresetPassword(true)
  }

  const alertType=()=>{
      if(alert.type === "logout"){
        return (<div className='col-lg-12 flexy'>
        <div onClick={logoutConform} className="logoutbtn badge col-lg-6">Logout</div>
        <div onClick={handleClose} className="cancelbtn badge col-lg-6">Cancel</div>
      </div> )
      }
      else if(alert.type === "reset")
      {
        return (<div className='col-lg-12 flexy'>
            <div onClick={ConformReset} className="logoutbtn badge col-lg-6">Reset Password</div>
            <div onClick={handleClose} className="cancelbtn badge col-lg-6">Cancel</div>
            </div>)
      }
      }
  


  return<div className="popUP container-fluid  col-lg-12 col-md-12 col-sm-12 col-xs-12">   
            <div className="popup-inner-alert container col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
                <button className='btn alertclosebtn' onClick={handleClose} ><i className="bi bi-x"></i></button>
                <div className='text-center col-lg-12 col-md-12 col-sm-12 col-xs-12 '>
                <p className='fontHeader p-5 m-0'> {alert.msg}</p>
                {alertType()}
                </div>
             </div>
       </div>
};

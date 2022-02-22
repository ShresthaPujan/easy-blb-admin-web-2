import React ,{useState,useContext,useEffect}from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo3.png'


export default function Uppersidebar() {
    const context = useContext(cooperativeContext)
    const {alert,setAlert,logoutdata,menutoggle,setMenutoggle,msg,setMsg} = context;
    const [active, setActive] = useState(false);
    const handleLogoClick = (e) =>{
        e.preventDefault();
        setActive(!active);
        
    }
   
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const authCtx= useContext(AuthContext);
    const auth = localStorage.getItem("userInfo");

    function logOut(e){
        e.preventDefault();
        setActive(!active);
        setAlert({
            fade:'fade-in',
            msg:"Do you want to Reset Password ?",
            type:"logout"
        })
    }
    function logoutFunction(){
        authCtx.logout();
        localStorage.clear();
        dispatch(logout())  
        setAlert({
            fade:'fade-default'
        })
        navigate("/login")

    }
    const handleMenuChange = () =>{
        setMenutoggle(!menutoggle);
    }
    useEffect(()=>{
   
    if(logoutdata){
        logoutFunction()
    }
    },[logoutdata]);
    const message = (msg) =>{
        return msg
    }
    
    useEffect(()=>{
        const timer = setTimeout(() => {
           setMsg({})
          }, 3000);

          return () => clearTimeout(timer);
    },[msg])

  
    
  return <>
       
                        <div className="col-lg-12 col-md-12 col-sm-12 UpperNav">
                            <div className="wrapper">
                                <div className="navbar">
                                    <div>
                                        <button className="toggle" onClick={handleMenuChange} ><i className="fas fa-bars"></i></button><span className="mx-3">DashBoard</span>
                                    </div>
                                    <div className={msg.type}>
                                       {message(msg.msg)}
                                    </div>
                                    <div className="navbar__right">
                                     
                                        <div  className="mx-2" style={{fontSize:"14px"}}>EasySoftware pvt.Ltd </div>
                                        <div className="mx-2" onClick={handleLogoClick}><img  src={'../img/logo3.png'} alt=""/></div>
                                       {active &&( <div className="dropLogomenu">
                                            <ul>
                                                <li style={{marginTop:"5px"}}><a href="" onClick={logOut}><span><i className="bi bi-people mx-3" ></i>Logout</span></a></li>
                                            </ul>
                                         </div>  )}
                                    </div>
                                </div>
                                </div>
                            </div>     
                          
                            
  
                
  </>;
}

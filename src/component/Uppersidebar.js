import React ,{useState,useContext,useEffect}from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import Swal from 'sweetalert2'
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo3.png'


export default function Uppersidebar() {
    const context = useContext(cooperativeContext)
    const {alert,setAlert,logoutdata,menutoggle,setMenutoggle} = context;
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
        setAlert(true)
    }
    function logoutFunction(){
        authCtx.logout();
        localStorage.clear();
        dispatch(logout())  
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

  return <>
       
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="wrapper">
                                <div className="navbar">
                                    <div>
                                        <button className="toggle" onClick={handleMenuChange} ><i className="fas fa-bars"></i></button><span className="mx-3">DashBoard</span>
                                    </div>
                                    <div className="navbar__right">
                                    <div  className="mx-2"><i className="fas fa-bell"></i> </div>  
                                        <div  className="mx-2">EasySoftware pvt.Ltd</div>
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

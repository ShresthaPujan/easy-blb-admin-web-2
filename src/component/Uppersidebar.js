import React ,{useState,useContext,useEffect,useRef}from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo.png'
import OutsideAlerter from './hooks/OutsideAlerter';

export default function Uppersidebar() {
    const context = useContext(cooperativeContext)
    const {logoutDropdownactive, setlogoutDropdownactive,setAlert,logoutdata,menutoggle,setMenutoggle} = context;
  

    const handleLogoClick = (e) =>{
        e.preventDefault();
        setlogoutDropdownactive(!logoutDropdownactive);   
    }
   
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const authCtx= useContext(AuthContext);
    const auth = localStorage.getItem("userInfo");
    const myref = useRef(null);

    function logOut(e){
        e.preventDefault();
        setlogoutDropdownactive(!logoutDropdownactive);
        setAlert({
            fade:'fade-in',
            msg:"Do you want to Logout ?",
            type:"logout"
        })
        if (myref.current && !myref.current.contains(e.target)) {
                console.log("asd")
        }
        
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

    
    


    
  return <>
       
                        <div className="col-lg-12 col-md-12 col-sm-12 UpperNav">
                            <div className="wrapper">
                                <div className="navbar">
                                    <div>
                                        <button className="toggle" onClick={handleMenuChange} ><i className="fas fa-bars"></i></button><span className="mx-3"></span>
                                    </div>
                                 
                                    <div className="navbar__right">
                                     
                                        <div  className="mx-2" style={{fontSize:"14px",marginTop:"10px"}}>EasySoftware pvt.Ltd </div>
                                        <div className="mx-2" onClick={handleLogoClick}><img  src={logo} alt=""/></div>
                                       {logoutDropdownactive &&( 
                                   
                                           <div className="dropLogomenu"  ref={myref}>
                                             
                                            <ul>
                                          
                                                <li><a href="" onClick={logOut}><span ><i class="fas fa-power-off mr-2"></i>Logout</span></a></li>
                                            
                                            </ul>
                                           
                                         </div>
                                 
                                         )}
                                    </div>
                                     
                                </div>
                                </div>
                            </div>     
                          
                            
  
                
  </>;
}

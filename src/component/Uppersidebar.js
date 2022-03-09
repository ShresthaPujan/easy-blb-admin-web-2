import React ,{useState,useContext,useEffect,useRef}from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo.png'
import OutsideAlerterlogout from './hooks/OutsideAlerterlogout';
import OutsideAlerter from './hooks/OutsideAlerter';
import $ from "jquery"

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
   

    function logOut(e){
        e.preventDefault();
        setlogoutDropdownactive(!logoutDropdownactive);
        setAlert({
            fade:'fade-in',
            msg:"Do you want to Logout ?",
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
    
 const searchPopup = (e) =>{
     e.preventDefault();
    $(".displaySearchbar").fadeIn(100);
 }
 const closeSearchPopup = (e) =>{
    e.preventDefault();
    $(".displaySearchbar").fadeOut(100);
 }


  return <>
       
                        <div className="col-lg-12 col-md-12 col-sm-12 UpperNav">
                            <div className="wrapper">
                                <div className="navbar">
                                    <div className="navbar__left">
                                        <button className="toggle" onClick={handleMenuChange} ><i className="fas fa-bars"></i></button><span className="mx-3"></span>
                                        <div className="mainNavUserInfo pl-0">
                                        <div><img className="upperuserImg pl-0"  src="https://geedmo.com/envato/products/wintermin/app/img/user/02.jpg" alt="" /></div>
                                        <div className="uppernavuserInfotext pl-2"> <p className='mb-0'>Welcome User</p>
                                                <p className='mb-0'>UX-Dev</p>
                                         </div>
                                    </div>
                                    
                                    </div>
                                 
                                    <div className="navbar__right">
                                        <div className='d-flex justify-content-center align-items-center ' >
                                            <i className="fas fa-search pointer" onClick={searchPopup}></i>
                                            <i className="fas fa-sync ml-4 pointer"></i>
                                            <i className="fas fa-comment-dots ml-4 pointer"></i>
                                            <i className="fas fa-bell mx-4 pointer"></i>
                                    </div>
                                      
                                        <div className="mx-2" onClick={handleLogoClick}><img  src={logo} alt=""/></div>
                                      
                                       {logoutDropdownactive &&( 
                                   <OutsideAlerterlogout>
                                           <div className="dropLogomenu" >
                                         
                                            <ul>
                                          
                                                <li><a href="" onClick={logOut}><span ><i className="fas fa-power-off mr-2"></i>Logout</span></a></li>
                                            
                                            </ul>
                                           
                                         </div>
                                         </OutsideAlerterlogout>   
                                         )} 
                                    </div>
                               
                                    <div className="searchbar displaySearchbar">
                                        <div className="searchBarPosition">
                                        <input type="text"  className='form-control seachradius' placeholder='Search....'/>
                                        <div className="searchbarabsolute">
                                                <div className="radiobutton">
                                                <input type="radio" id="a25" name="check-substitution-2" />
                                                <label className="btn btn-default  mb-0" for="a25">Cooperative</label>
                                                </div>
                                                <div className="radiobutton">
                                                <input type="radio" id="a50" name="check-substitution-2" />
                                                <label className="btn btn-default mb-0" for="a50">Collector</label>
                                                </div>
                                                <div className="radiobutton">
                                                <input type="radio" id="a75" name="check-substitution-2" />
                                                <label className="btn btn-default mb-0" for="a75">Menu</label>
                                                </div>
                                        
                                           
                                        </div>
                                        <div className='searchcloseAbsolute'>
                                            <i className="fas fa-times  pointer searchBarclose" onClick={closeSearchPopup} ></i>
                                            </div>
                                        </div>
                           
                                  
                                    </div>
                                </div>
                                </div>
                            </div>     
                          
                            
  
                
  </>;
}

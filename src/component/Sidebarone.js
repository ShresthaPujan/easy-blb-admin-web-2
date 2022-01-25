import '../style.css';
import React, { useEffect , useState } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './Login';
import '../style.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
export default function Sidebarone() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = localStorage.getItem("userInfo");

    function logOut(e){
        e.preventDefault();
        localStorage.clear();
        dispatch(logout())  
        navigate("/login")
    }

  return <>
  { auth ?
  <div className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2" id="side-nav"> 
                    <div className="menu " >
                        <div className="img text-center">
                            <img src={'../img/logo3.png'} alt=""/>
                        <p>kalimati <br/> 981234055</p>  
                        </div>
                        <nav id="ram">
                            <ul >
                                <li><Link to="/"><i className="bi bi-folder-fill mx-3"></i>DashBoard</Link></li>
                                <li><Link className="arrow "  to="/"><i className="bi bi-people mx-3"></i>Profile</Link> </li>
                                <li><Link className="arrow "  to="/"><i className="bi bi-people mx-3"></i>Cooperative</Link> </li>
                                <li><Link className="arrow " to="/"><i className="bi bi-people mx-3"></i>Setting</Link> </li>
                                <li><Link className="arrow "   to="/"><i className="bi bi-people mx-3"></i>Lead</Link> </li>
                                <li><Link to="/"> <i className="bi bi-gear mx-3"></i>Setting</Link> </li>
                                <li onClick={logOut} ><Link  to="/"><i className="bi bi-people mx-3" ></i>Logout</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            
       

                <div  className="col-lg-10" id="upper-nav">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="navbar">
                                    <div>
                                        <button className="toggle" ><i className="fas fa-bars"></i></button><span className="mx-3">DashBoard</span>
                                    </div>
                                    <div className="navbar__right">
                                    <div  className="mx-2"><i className="fas fa-bell"></i> </div>  
                                        <div  className="mx-2">EasySoftware pvt.Ltd</div>
                                        <div className="mx-2"><img  src={'../img/logo3.png'} alt=""/></div>
                                    </div>
                                </div>
                                </div>
                            </div>            
  
                 </div>
             </div>  
        </div>
        </div>
        : 
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
          </>
    }
  </>;
}

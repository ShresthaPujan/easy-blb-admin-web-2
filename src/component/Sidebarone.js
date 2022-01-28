import '../style.css';
import React, { useEffect , useState ,useContext } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './Login';
import '../style.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
export default function Sidebarone() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const authCtx= useContext(AuthContext);
    const auth = localStorage.getItem("userInfo");

    function logOut(e){
        e.preventDefault();
        authCtx.logout();
        localStorage.clear();
        dispatch(logout())  
        navigate("/login")
    }

  return <>
  { auth ?
  <>  
                <div className="col-lg-2" id="side-nav"> 
                    <div className="menu " >
                        <div className="img text-center">
                            <img src={'../img/logo3.png'} alt=""/>
                        <p>kalimati <br/> 981234055</p>  
                        </div>
                        <nav id="ram">
                            <ul >
                                <li ><Link to="/"><i className="bi bi-folder-fill mx-3"></i>DashBoard</Link></li>
                                <li ><Link className="arrow "  to="/"><i className="bi bi-people mx-3"></i>Profile</Link> </li>
                                <li><Link className="arrow "  to="/"><i className="bi bi-people mx-3"></i>Cooperative</Link> </li>
                                <li><Link className="arrow " to="/"><i className="bi bi-people mx-3"></i>Setting</Link> </li>
                                <li ><Link className="arrow "   to="/"><i className="bi bi-people mx-3"></i>Lead</Link> </li>
                          
                                <li ><Link to="/"> <i className="bi bi-gear mx-3"></i>Setting</Link> </li>
                                <li  onClick={logOut} ><Link  to="/"><i className="bi bi-people mx-3" ></i>Logout</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            
       
        </>
        : 
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
          </>
    }
  </>;
}

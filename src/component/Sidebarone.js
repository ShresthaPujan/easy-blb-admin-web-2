import '../style.css';
import React, { useEffect , useState ,useContext } from 'react'
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Login from './Login';
import '../style.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import classes from'../abs.css';
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
                        <nav >
                            <ul >
                                <li ><NavLink activeclassname={classes.active} to="/" ><i className="bi bi-folder-fill mx-3"></i>DashBoard</NavLink></li>
                                <li ><NavLink activeclassname={classes.active} className="arrow "  to="/profile"><i className="bi bi-people mx-3"></i>Profile</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow "  to="/test"><i className="bi bi-people mx-3"></i>Cooperative</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow " to="/test1"><i className="bi bi-people mx-3"></i>Setting</NavLink> </li>
                                <li ><NavLink activeclassname={classes.active} className="arrow "   to="/test2"><i className="bi bi-people mx-3"></i>Lead</NavLink> </li>
                          
                                <li ><NavLink activeclassname={classes.active} to="/test4"> <i className="bi bi-gear mx-3"></i>Setting</NavLink> </li>
                                <li  onClick={logOut} ><NavLink activeclassname={classes.active}  to="/"><i className="bi bi-people mx-3" ></i>Logout</NavLink> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            
       
        </>
        : 
        <>
            <li className="nav-item">
                <NavLink activeClassName={classes.active} className="nav-link" to="/login">Login</NavLink>
            </li>
          </>
    }
  </>;
}

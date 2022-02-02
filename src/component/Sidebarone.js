import '../style.css';
import React, { useContext } from 'react'
import { Link,NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import classes from'../abs.css';
import Swal from 'sweetalert2'
import logo from './logo3.png'
export default function Sidebarone() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const authCtx= useContext(AuthContext);
    const auth = localStorage.getItem("userInfo");

    function logOut(e){
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Logout",
            iconHtml: `<img  class="logoImg" src=${logo} >`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
          }).then((result) => {
            if (result.isConfirmed) {
                authCtx.logout();
                localStorage.clear();
                dispatch(logout())  
                navigate("/login")
            }
          })   
    }
  
  return <>
  { auth ?
  <>  
               
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
                                <li  onClick={logOut} ><Link  to=""><i className="bi bi-people mx-3" ></i>Logout</Link> </li>
                            </ul>
                        </nav>
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

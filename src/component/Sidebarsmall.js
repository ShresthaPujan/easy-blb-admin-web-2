
import classes from'../abs.css';
import React ,{useState,useContext,useEffect}from 'react';
import { NavLink,Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import Swal from 'sweetalert2'
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo3.png'


export default function Sidebarsmall() {
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
    { auth ?
    <>  
                      <div className="sm-menu " >
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="img text-center">
                                        <img src={logo} alt=""/>
                                    </div>   
                                
                             </div>
                            <nav className='text-center'>
                                <ul>
                                    <li><NavLink activeclassname={classes.active} to="/"><i className="bi bi-folder-fill mx-3"></i></NavLink></li>
                                    <li><NavLink activeclassname={classes.active} to="/profile"><i className="bi bi-people mx-3"></i></NavLink> </li>
                                    <li><NavLink activeclassname={classes.active} to="/cooperative"><i className="bi bi-people mx-3"></i></NavLink> </li>
                                    <li><NavLink activeclassname={classes.active} to="/test1"><i className="bi bi-people mx-3"></i></NavLink> </li>
                                    <li><NavLink activeclassname={classes.active} to="/test2"><i className="bi bi-people mx-3"></i></NavLink> </li>
                                    <li><NavLink activeclassname={classes.active} to="/test3"> <i className="bi bi-gear mx-3"></i></NavLink> </li>
                                    <li onClick={logOut} ><Link  to=""><i className="bi bi-people mx-3"></i></Link> </li>
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
  



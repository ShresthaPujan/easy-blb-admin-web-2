
import classes from'../abs.css';
import React ,{useState,useContext,useEffect}from 'react';
import { NavLink,Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo3.png'


export default function Sidebarone() {
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
        setAlert({
            fade:'fade-in'
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

  
  return <>
  { auth ?
  <>  
               
                    <div className="menu " >
                        <div className="img text-center">
                            <img src={logo} alt=""/>
                        <p>kalimati <br/> 981234055</p>  
                        </div>
                        <nav >
                            <ul >
                                <li ><NavLink activeclassname={classes.active} to="/" ><i className="bi bi-folder-fill mx-3"></i>DashBoard</NavLink></li>
                                <li ><NavLink activeclassname={classes.active} className="arrow "  to="/profile"><i className="bi bi-people mx-3"></i>Profile</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow "  to="/cooperative"><i className="bi bi-people mx-3"></i>Cooperative</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow "  to="/collector"><i className="bi bi-people mx-3"></i>Collector</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow " to="/esc"><i className="bi bi-people mx-3"></i>Setting</NavLink> </li>
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

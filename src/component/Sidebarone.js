
import classes from'../abs.css';
import React ,{useState,useContext,useEffect}from 'react';
import { NavLink,Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout} from '../features/Userslice';
import AuthContext from './auth-context';
import cooperativeContext from './Cooperative/cooperativeContext';
import logo from './logo.png'


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
            fade:'fade-in',
            msg:"Do you want to logout ?",
            type:"logout"
        })
        console.log(navigate)
    }
    function logoutFunction(){
        authCtx.logout();
        localStorage.clear();
        dispatch(logout())  
        setAlert({
            fade:'fade-default',
            msg:'',
            type:''
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
                        <div className="img ">
                            <img src={logo} alt="" className='imgMain'/>
                      <span className='logoHeading'>Easy Software</span>
                        </div>
                        <nav className='MainNavbar'>
                            <ul >
                                {/* <li ><NavLink activeclassname={classes.active} to="/" ><i className="bi bi-folder-fill mx-3 icon"></i>DashBoard</NavLink></li>
                                <li ><NavLink activeclassname={classes.active} className="arrow "  to="/profile"><i className="bi bi-people mx-3 icon"></i>Profile</NavLink> </li> */}
                                <li><NavLink activeclassname={classes.active} className="arrow "  to="/cooperative"><i className="bi bi-people mx-3 icon"></i>Cooperative</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow "  to="/collector"><i className="bi bi-people mx-3 icon"></i>Collector</NavLink> </li>
                                <li><NavLink activeclassname={classes.active} className="arrow "  to="/notification"><i className="bi bi-people mx-3 icon"></i>Notification</NavLink> </li>
                                <li  onClick={logOut} ><a><i className="bi bi-people mx-3" ></i>Logout</a> </li>
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

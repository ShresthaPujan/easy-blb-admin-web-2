import React,{useContext ,useEffect} from 'react';
import AuthContext from './component/auth-context';
import { mavigate,Navigate,useLocation, useNavigate} from 'react-router-dom';
export default function Notfound() {
    const authCtx= useContext(AuthContext);
    let location = useLocation()
    let navigate = useNavigate();

    useEffect(() => {
        console.log("check")
        if(authCtx.isLoggedIn){
            navigate('/')
          
        }
        else{
           navigate('/login')
           
        }
    
   
    }, []);
    
   
  return <div></div>;
}

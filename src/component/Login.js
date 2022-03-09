import React ,{useState ,useEffect ,useContext} from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import '../App.css';
import { useDispatch } from 'react-redux';
import {login,userDetail} from "../features/Userslice";
import { useNavigate ,Navigate,useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/Userslice';
import axios from 'axios';
import Dashboard from './Dashboard';
import AuthContext from './auth-context';
import bankingimage from './banking.png'



export default function Login() {
    const authCtx= useContext(AuthContext);
    const initalvalue = {username:'',password:''};
    const [formValues, setFormValues] = useState(initalvalue);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
   
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const user = useSelector(selectUser);
    
    const handleChange =(e)=>{
        e.preventDefault();
        const{name , value} = e.target;
        setFormValues({ ...formValues,[name]:value});
    };
    const auth = localStorage.getItem("userInfo");
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setformErrors(validate(formValues));
        setIsSubmit(true);         
    };
    let location = useLocation()

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            // localStorage.setItem('token',1);
            
            // localStorage.setItem('userInfo',"asdfsadfsa");
          const dataForm =  {
                 UserName: formValues.username,
                 Pwd: formValues.password,      
            }
            
            axios.post('https://esnep.com/BLBApi/BLB/BLBAUTH',dataForm)
              .then(function (response) {
                const  res = response.data
                const result = response.data.STATUS_CODE
                if(result === "0"){     
                    const  userInfo= {
                    UserID:  res.UserID,
                    UserName: res.UserName,
                    UserType: res.UserType,
                   }
                   localStorage.setItem('userInfo',JSON.stringify(userInfo))
                   dispatch(userDetail(userInfo)) 
                   authCtx.login(res.UserID);
                   navigate('/')
                   setIsSubmit(false)   
                }
                else{
                    setIsSubmit(false)
                    setformErrors({ ...formErrors,errorv:"Please Enter Valid Credentials"})
                }
              })
              .catch((error) => {
                  console.log(error)
                  setIsSubmit(false)
                  setformErrors({ ...formErrors,errorv:"Problem in Server Please Try Again Later"})

              })
              //eslint-disable-next-line     
        }
        else{
        setIsSubmit(false)
    }
    },[formErrors]);

    const  validate = (values) => {
        const errors ={}
        if(!values.username){
         errors.username = "Username is required";
        } 
        if(!values.password){
            errors.password = "Password  is required";
           } else if (values.password.length < 4){
               errors.password = "Password must ve more than 4 Characters"
           }else if (values.password.length >10){
               errors.password = "Password cannot exceed more than 10 charecters"
           }
        return errors;
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    
    return authCtx.isLoggedIn ? <Navigate to="/" replace state={{from :location}}/> :(
   
        <>
               <div className="container login-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 login-form-1 ">
                                <div className='text-center'>
                               
                                <h5 >Log in</h5>
                               
                                <p>Enter your valid credentials below</p>
                                </div>
                                <form>
                              
                                <p className="errormsg"> {formErrors.errorv}</p>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>                                     
                                        <input type="text" className="form-control form-control-sm" name="username" value={ formValues.username} onChange={handleChange} placeholder="Enter your username" />
                                        <p className="errormsg">{formErrors.username}</p>
                                    </div>
                                    <div className="form-group">
                                   
                                        <label htmlFor="exampleInputPassword1">Password</label>                                        
                                        <input type="password" className="form-control form-control-sm" name="password" value={formValues.password} onChange={handleChange}  placeholder="Enter your password"/>
                                        <p className="errormsg">{formErrors.password}</p>
                                    </div>
                                    <div className="form-group ">
                                   
                                <button type="submit" onClick={handleSubmit} className="btnSubmit">{ isSubmit ? <span   >Loading ...</span>  :  <span >Login</span>}</button>
                          
                                    </div>
                                    </form>
                                    <div class="text-center">
                                        <p>By <a style={{cursor:"pointer"}} onClick={() => openInNewTab("https://easysoftware.com.np/")} ><span style={{color:"red"}}>Easy</span> <span style={{color:"#3498db"}}>Software</span></a></p>
                                        </div>
                                     </div>
                            <div className="col-lg-6 col-md- 6 col-sm-6 login-form-2 text-center">
                            <h3>Welcome to the easy software</h3>
                                <h6>Banking Software</h6>
                                <OwlCarousel items={1} margin={20} autoplay ={true} >  
                                <div className="item"><img src={bankingimage} /> </div>
                                <div className="item"><img src={bankingimage} /></div>
                                <div className="item"><img src={bankingimage} /></div>
                                </OwlCarousel>
                            <p>2021 Easy Software Pvt.Ltd. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
            
         
        </>
    )
}

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
            localStorage.setItem('token',1);
            
            localStorage.setItem('userInfo',"asdfsadfsa");
          const dataForm =  {
                 UserName: formValues.username,
                 Pwd: formValues.password,      
            }
            
            axios.post('/BLBApi/BLB/BLBAUTH',dataForm)
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
         errors.username = "username is required";
        } 
        if(!values.password){
            errors.password = "Password  is required";
           } else if (values.password.length < 4){
               errors.password = "password must ve more than 4 Characters"
           }else if (values.password.length >10){
               errors.password = "password cannot exceed more than 10 charecters"
           }
        return errors;
    }
    
    return authCtx.isLoggedIn ? <Navigate to="/" replace state={{from :location}}/> :(
   
        <>
               <div className="container login-container">
                        <div className="row">
                            <div className="col-md-6 login-form-1">
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'}/>
                                <h5>Log in</h5>
                                <p>Enter your valid credentials below</p>
                                <form>
                                <p className="errormsg"> {formErrors.errorv}</p>
                        
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <p className="errormsg">{formErrors.username}</p>
                                        <input type="text" className="form-control" name="username" value={ formValues.username} onChange={handleChange} placeholder="Enter your username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <p className="errormsg">{formErrors.password}</p>
                                        <input type="password" className="form-control" name="password" value={formValues.password} onChange={handleChange}  placeholder="Enter your password"/>
                                    </div>
                                    <div className="form-group">
                                    <span className="fa-flip-vertical" style={{display: "inline-block"}}>
                                         <i className="fa fa-download fa-rotate-270"></i>
                                    </span>
                                <button type="submit" onClick={handleSubmit} className="btnSubmit">{ isSubmit ? <span  style={{marginLeft: "15%"}} >Loading ...</span>  :  <span style={{marginLeft: "15%"}}>Login</span>}</button>
                          
                                    </div>
                                    </form>
                            </div>
                            <div className="col-md-6 login-form-2 text-center">
                            <h3>Welcome to the easy software</h3>
                                <h6>Banking Software</h6>
                                <OwlCarousel items={1} margin={8} autoplay ={true} >  
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

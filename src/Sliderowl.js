import React ,{useState ,useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { useNavigate } from 'react-router-dom';

export default function Sliderowl() {
    
    let navigate = useNavigate();
    const initalvalue = {username:'',password:''};
    const [formValues, setFormValues] = useState(initalvalue);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange =(e)=>{
        const{name , value} = e.target;
        setFormValues({ ...formValues,[name]:value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setformErrors(validate(formValues));
        setIsSubmit(true);         
    };
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        localStorage.setItem("user-info",JSON.stringify(formValues))  
        }
        if(localStorage.getItem('user-info'))
        {
            navigate("/dashboard")
        }
    },[formErrors]);

    const  validate = (values) => {
        const errors ={}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
         errors.username = "username is required";
        }
        // if(!values.email){
        //     errors.email = "Email is required";
        //    } else if (!regex.test(values.email)) 
        //    {
        //        errors.email="this is not a valid email format"
        //    }
        if(!values.password){
            errors.password = "Password  is required";
           } else if (values.password.length < 4){
               errors.password = "password must ve more than 4 Characters"
           }else if (values.password.length >10){
               errors.password = "password cannot exceed more than 10 charecters"
           }
        return errors;
    }
  const sessdata =() =>{
    console.log(sessionStorage.getItem('loginInfo'));
  }
    return (
        <div>
               <div className="container login-container">
                        <div className="row">
                            <div className="col-md-6 login-form-1">
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'}/>
                                <h5>Log in</h5>
                                <p>Enter your valid credentials below</p>
                                <form>
                                    <div className="form-group">
                                         <p>{formErrors.username}</p>
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input type="text" className="form-control" name="username" value={ formValues.username} onChange={handleChange} placeholder="Enter your username" />
                                    </div>
                                    <div className="form-group">
                                        <p>{formErrors.password}</p>
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" name="password" value={formValues.password} onChange={handleChange}  placeholder="Enter your password"/>
                                    </div>
                                    <div className="form-group">
                                        <span className="fa-flip-vertical" style={{display: "inline-block"}}>
                                    <i className="fa fa-download fa-rotate-270"></i>
                                        </span>
                                <button type="submit" onClick={handleSubmit}className="btnSubmit">Login</button>
                          
                                    </div>
                                    </form>
                            </div>
                            <div className="col-md-6 login-form-2 text-center">
                            <h3>Welcome to the easy software</h3>
                                <h6>Banking Software</h6>
                            <OwlCarousel items={1}  className="owl-theme" loop nav margin={8} > 
                                <div className="item"><img src={process.env.PUBLIC_URL + '/img/banking.png'} /> </div>
                                <div className="item"><img src={process.env.PUBLIC_URL + '/img/banking.png'} /></div>
                                <div className="item"><img src={process.env.PUBLIC_URL + '/img/banking.png'} /></div>
                            </OwlCarousel>
                            <p>2021 Easy Software Pvt.Ltd. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                 <button onClick={sessdata}>
                        Get sesson data
                 </button>
        </div>
    )
}

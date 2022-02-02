import React,{useState ,useEffect,useContext} from 'react';
import cooperativeContext from './Cooperative/cooperativeContext';
export default function AddCooperative(props) {

    const context = useContext(cooperativeContext)
    const {setCoperativeEdit,cooperativeEdit} = context;
        

    // const initalvalue = props.item;
      
  
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [first, setfirst] = useState({});

    const handleChange =(e)=>{
        const{name , value} = e.target;
        setCoperativeEdit({ ...cooperativeEdit,[name]:value});
    };

    const handlePopupClose = (e) =>{    
        e.preventDefault();
        props.setTrigger(false);
        setformErrors({})
    }
    const handleAddCooperative =(e) =>{
        e.preventDefault();
        setformErrors(validate(cooperativeEdit));
        setIsSubmit(true);         
    }
  
  
useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log("Form subbmitted")
        
  }
},[formErrors]);

const handleReset =(event)=>{
    event.preventDefault();
    setCoperativeEdit({
        logo:"",
        cooperaticecode: "",
        cooperativename:'',
        address:"",
        noOfUser:'',
        licenseExipry: '',
        creditlimit:'',
        contactnumber:'',
    })
}

    const  validate = (values) => {
        const errors ={}
        const numv = /^[0-9]+$/i;
       
        if(!values.address){
         errors.address = "Address is required";
        }
    
        if(!values.cooperaticecode){
            errors.cooperaticecode = "Co operative Code  is required";
           } 
        if(!values.cooperativename){
            errors.cooperaticecode = "Co operative Code  is required";
        }
        if(!values.contactnumber){
            errors.contactnumber = "contactnumber  is required";
        }
        else if(!numv.test(values.contactnumber)){
            errors.contactnumber = "Please enter number only";
          }
        if(!values.creditlimit){
            errors.creditlimit = "creditlimit  is required";
        }
        if(!values.isOnline){
            errors.isOnline = "isOnline  is required";
        }
        if(!values.logo){
            errors.logo = "logo is required";
        }
        if(!values.noOfUser){
            errors.noOfUser = "noOfUser  is required";
        }
        if(!values.licenseExipry){
            errors.licenseExipry = "licenseExipry  is required";
        }

        return errors;
    }
    
 
    return (props.trigger)
        ? (
            <div className="popUP container-fluid  col-lg-12 col-md-12 col-sm-12 col-xs-12">   
                    <div className="popup-inner container p-4 ">
                         <button className='btn closebtn' onClick={handlePopupClose}><i className="bi bi-x"></i></button>
                        <form action="">
                                <div className="col-lg-12 col-md-12 col-sm-12">        
                                    {props.children}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                    
                                                        <div >
                                                        <label htmlFor="cooperaticecode" className="form-label">Cooperaticecode</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={cooperativeEdit.cooperaticecode} onChange={handleChange}
                                                                name="cooperaticecode"
                                                                placeholder="Co Operative Code"
                                                                aria-label="Co Operative Code"
                                                                id="cooperaticecode"
                                                                aria-describedby="addon-wrapping"/>
                                                                  <span className="errormsg">{formErrors.cooperaticecode}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={cooperativeEdit.contactnumber} onChange={handleChange}
                                                                placeholder="Contact Number"
                                                                aria-label="Contact Number"
                                                                name="contactnumber"
                                                                id="contactnumber"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.contactnumber}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="noOfUser" className="form-label">No of User</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={ cooperativeEdit.noOfUser} onChange={handleChange}
                                                                placeholder="No Of User"
                                                                aria-label="No Of User"
                                                                name="noOfUser"
                                                                id="noOfUser"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.noOfUser}</span>
                                                      </div>
                                                      
                                                      <div >
                                                            <label htmlFor="licenseExipry" className="form-label">license Exipry</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={cooperativeEdit.licenseExipry} onChange={handleChange}
                                                                    placeholder="license Expiry"
                                                                    aria-label="license Expiry"
                                                                    id="licenseExipry"
                                                                    name="licenseExipry"
                                                                    aria-describedby="addon-wrapping"/>
                                                                    <span className="errormsg">{formErrors.licenseExipry}</span>
                                                        </div>
  
                                            </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                    <div >
                                                        <label htmlFor="cooperativename" className="form-label">Co Operativename</label>   
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={ cooperativeEdit.cooperativename} onChange={handleChange}
                                                                placeholder="Co Operative Name"
                                                                name="cooperativename"
                                                                id="cooperativename"
                                                                aria-label="Co Operative Name"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.cooperativename}</span>
                                                        </div>
                                                        <div >  
                                                        <label htmlFor="Address" className="form-label">Address</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address"
                                                                aria-label="Address"
                                                                name="address"
                                                                id="Address" 
                                                                value={cooperativeEdit.address} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.address}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="creditlimit" className="form-label">Credit Limit</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={ cooperativeEdit.creditlimit} onChange={handleChange}
                                                                placeholder="Credit Limit"
                                                                aria-label="Credit Limit"
                                                                name="creditlimit"
                                                                id="creditlimit"
                                                                aria-describedby="addon-wrapping"/>
                                                                 <span className="errormsg">{formErrors.creditlimit}</span>
                                                        </div>
                                                       
                                           
                                            <div >
                                                <label htmlFor="Logo" className="form-label">Logo</label>
                                                    <input
                                                        className   ="form-control"
                                                        type="file"
                                                        className="form-control"
                                                        value="" onChange={handleChange}
                                                        placeholder="Logo"
                                                        aria-label="Logo"
                                                        id="Logo"
                                                        name="logo"
                                                        aria-describedby="addon-wrapping"/>
                                            </div>
                                            <span className="errormsg">{formErrors.logo}</span>
                                   
                                           
                                            
                                           
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 col-sm-12 text-right  my-3 col-xs-12">

                                            <button className="btn btn-primary m-2 px-4 addresbtn" onClick={handleAddCooperative} >{props.edit ? 'Edit' : 'ADD'} </button>
                                            <button className="btn btn-danger px-2 addresbtn" onClick={handleReset}> RESET</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
            </div>
        )
        : "";
}

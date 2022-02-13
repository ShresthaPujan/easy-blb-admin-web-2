import React,{useState ,useEffect,useContext , useRef} from 'react';
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import Escpdetect from '../component/Escpdetect';

export default function AddCooperative(props) {

    const context = useContext(cooperativeContext)
    const {setCoperativeEdit,cooperativeEdit,addCoperative,edit, setEdit} = context;
      
 
    // const initalvalue = props.item;
     const ref = useRef(null); 
    const [formErrors, setformErrors] = useState({val:1});
    const [isSubmit, setIsSubmit] = useState(false);
    const [first, setfirst] = useState({});

    const handleChange =(e)=>{
        const{name , value} = e.target;
        setCoperativeEdit({ ...cooperativeEdit,[name]:value});
    };
    const handlePopupClose = (e) =>{    
        e.preventDefault();
        props.setTrigger(false);
        setformErrors({val:1})
    }
    const handleAddCooperative =(e) =>{
        e.preventDefault();
        setformErrors(validate(cooperativeEdit));
           
    }

    
useEffect(() => {
    
    if(Object.keys(formErrors).length === 0){
        setIsSubmit(true);     
        
  }
},[formErrors]);
console.log(isSubmit)
useEffect(()=>{

    if(isSubmit){
       var cooperativedata = {
        logo:cooperativeEdit.logo,
        cooperaticecode: cooperativeEdit.cooperaticecode,
        cooperativename: cooperativeEdit.cooperativename,
        address:cooperativeEdit.address,
        noOfUser: cooperativeEdit.noOfUser,
        licenseExipry:   cooperativeEdit.licenseExipry,
        creditlimit: cooperativeEdit.creditlimit,
        contactnumber:cooperativeEdit.contactnumber,
        NickName: cooperativeEdit.NickName,
        ColorCode: cooperativeEdit.ColorCode,
        IsOnline: cooperativeEdit.IsOnline,
        IsPaid:cooperativeEdit.IsPaid,
        ScopeType: cooperativeEdit.ScopeType,
        CbsURL:cooperativeEdit.CbsURL,
        IsWithdrawAllow: cooperativeEdit.IsWithdrawAllow,
        ShowHideBalance:cooperativeEdit.ShowHideBalance,
        AllowMultiDate: cooperativeEdit.AllowMultiDate,
        ContactPerson:   cooperativeEdit.ContactPerson,
        CreatedUserID:  cooperativeEdit.CreatedUserID,
       }
        addCoperative(cooperativedata);
        setIsSubmit(false)
        props.setTrigger(false);
        setCoperativeEdit({
        error:1
         })
    }
},[isSubmit])
    console.log(cooperativeEdit)
const handleReset =(event)=>{
    event.preventDefault();
    // setCoperativeEdit({
    //     logo:"",
    //     cooperaticecode: "",
    //     cooperativename:'',
    //     address:"",
    //     noOfUser:'',
    //     licenseExipry: '',
    //     creditlimit:'',
    //     contactnumber:'',
    // })
    setformErrors({reset:1})
    
   
}

    const  validate = (values) => {
        const errors ={}
        const numv = /^[0-9]+$/i;
       
        if(!values.address){
         errors.address = "required";
        }
    
        if(!values.cooperaticecode){
            errors.cooperaticecode = "required";
           } 
        if(!values.cooperativename){
            errors.cooperativename = "required";
        }
        if(!values.contactnumber){
            errors.contactnumber = "required";
        }
        else if(!numv.test(values.contactnumber)){
            errors.contactnumber = "Please enter number only";
          }
        if(!values.creditlimit){
            errors.creditlimit = " required";
        }
        else if(!numv.test(values.creditlimit)){
            errors.creditlimit = "Please enter number only";
          }
        if(!values.logo){
            errors.logo = "required";
        }
        if(!values.noOfUser){
            errors.noOfUser = "required";
        }
        else if(!numv.test(values.noOfUser)){
            errors.noOfUser = "Please enter number only";
          }
        
        if(!values.licenseExipry){
            errors.licenseExipry = "required";
        }
        if(!values.NickName){
            errors.NickName = "required";
        }
        if(!values.ColorCode){
            errors.ColorCode = "required";
        }
        if(!values.IsOnline){
            errors.IsOnline = "required";
        }
        if(!values.IsPaid){
            errors.IsPaid = "required";
        }
        if(!values.ScopeType){
            errors.ScopeType = "required";
        }
        if(!values.CbsURL){
            errors.CbsURL = "required";
        }
        if(!values.IsWithdrawAllow){
            errors.IsWithdrawAllow = "required";
        }
        if(!values.ShowHideBalance){
            errors.ShowHideBalance = "required";
        }
        if(!values.AllowMultiDate){
            errors.AllowMultiDate = "required";
        }
        if(!values.ContactPerson){
            errors.ContactPerson = "required";
        }
        if(!values.CreatedUserID){
            errors.CreatedUserID = "required";
        }

        return errors;
    }
    
 
    return (props.trigger)
        ? (
            <div  className="popUP container-fluid   col-lg-12 col-md-12 col-sm-12 col-xs-12">   
                    <div className="popup-inner container-fluid p-4 ">
                         <button className='btn closebtn'  onClick={handlePopupClose}><i className="bi bi-x"></i></button>
                        <form action="">
                                <div className="col-lg-12 col-md-12 col-sm-12">        
                                    {props.children}
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">        
                                            <div className="row">
                        
                                                    <div className="col-lg-4">
                                                        <label htmlFor="cooperaticecode" className="form-label">Cooperatice Code</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-1"
                                                                value={cooperativeEdit.cooperaticecode} onChange={handleChange}
                                                                name="cooperaticecode"
                                                                placeholder="Co Operative Code"
                                                                aria-label="Co Operative Code"
                                                                id="cooperaticecode"
                                                                disabled={edit}
                         
                                                                aria-describedby="addon-wrapping"/>
                                                                  <span className="errormsg">{formErrors.cooperaticecode}</span>
                                                        </div>
                                                        <div  className="col-lg-8">
                                                        <label htmlFor="cooperativename" className="form-label">Cooperative Name</label>   
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-1"
                                                                value={ cooperativeEdit.cooperativename} onChange={handleChange}
                                                                placeholder="Co Operative Name"
                                                                name="cooperativename"
                                                                id="cooperativename"
                                                                aria-label="Co Operative Name"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.cooperativename}</span>
                                                    </div>
                                                </div>
                                                <div className="boxformtwo">
                                                        <div >
                                                        <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-1"
                                                                value={cooperativeEdit.contactnumber} onChange={handleChange}
                                                                placeholder="Contact Number"
                                                                aria-label="Contact Number"
                                                                name="contactnumber"
                                                                id="contactnumber"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.contactnumber}</span>
                                                        </div>
                                                        <div >
                                                                <label htmlFor="NickName" className="form-label">Nick Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-sm mb-1"
                                                                        value={cooperativeEdit.NickName} onChange={handleChange}
                                                                        placeholder="Nick Name"
                                                                        aria-label="NickName"
                                                                        id="NickName"
                                                                        name="NickName"
                                                                        aria-describedby="addon-wrapping"/>
                                                                        <span className="errormsg">{formErrors.NickName}</span>
                                                            </div>
                                                      
                                                      </div>
                                                      <div className="row">   
                                                      <div className="col-lg-4">
                                                            <label htmlFor="licenseExipry" className="form-label">license Exipry </label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control form-control-sm mb-1"
                                                                    value={cooperativeEdit.licenseExipry} onChange={handleChange}
                                                                    placeholder="license Expiry"
                                                                    aria-label="license Expiry"
                                                                    id="licenseExipry"
                                                                    name="licenseExipry"
                                                                    aria-describedby="addon-wrapping"/>
                                                                    <span className="errormsg">{formErrors.licenseExipry}</span>
                                                        </div>
                                                        <div className="col-lg-4">
                                                        <label htmlFor="noOfUser" className="form-label">No of User</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-1"
                                                                value={ cooperativeEdit.noOfUser} onChange={handleChange}
                                                                placeholder="No Of User"
                                                                aria-label="No Of User"
                                                                name="noOfUser"
                                                                id="noOfUser"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.noOfUser}</span>
                                                      </div>
                                                      <div className="col-lg-4">
                                                             <label htmlFor="ContactPerson" className="form-label">Contact Person</label>
                                                            <input
                                                                type="text"
                                                                value={ cooperativeEdit.ContactPerson}
                                                                className="form-control form-control-sm mb-1"
                                                                onChange={handleChange}
                                                                placeholder="ContactPerson"
                                                                aria-label="ContactPerson"
                                                                id="ContactPerson"
                                                                name="ContactPerson"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.ContactPerson}</span>       
                                                         </div>
                                                        </div>
                                                            <div className="row">
                                                                    <div className="col-lg-4">
                                                                    <label htmlFor="" className="form-label">Is Online</label>
                                                                        <select style={{fontSize:"11px"}} value={cooperativeEdit.IsOnline} name="IsOnline" onChange={handleChange}  className="form-select form-select-sm">
                                                                             <option selected style={{fontSize:"11px"}}>select menu</option>
                                                                            <option value="Y">Yes</option>
                                                                            <option value="N">No</option>
                                                                           
                                                                        </select>
                                                                        <span className="errormsg">{formErrors.IsOnline}</span>       
                                                                </div>
                                                                    <div className="col-lg-4">
                                                                        <label htmlFor="IsPaid" className="form-label">Is Paid</label>
                                                                        <input
                                                                            type="text"
                                                                            value={ cooperativeEdit.IsPaid}
                                                                            className="form-control form-control-sm mb-1"
                                                                            onChange={handleChange}
                                                                            placeholder="IsPaid"
                                                                            aria-label="IsPaid"
                                                                            id="IsPaid"
                                                                            name="IsPaid"
                                                                            aria-describedby="addon-wrapping"/>
                                                                            <span className="errormsg">{formErrors.IsPaid}</span>       
                                                                    </div>
                                                              
                                                                   <div className="col-lg-4">
                                                                        <label htmlFor="IsWithdrawAllow" className="form-label">Is Withdraw Allow</label>
                                                                        <input
                                                                            type="text"
                                                                            value={ cooperativeEdit.IsWithdrawAllow}
                                                                            className="form-control form-control-sm mb-1"
                                                                            onChange={handleChange}
                                                                            placeholder="IsWithdrawAllow"
                                                                            aria-label="IsWithdrawAllow"
                                                                            id="IsWithdrawAllow"
                                                                            name="IsWithdrawAllow"
                                                                            aria-describedby="addon-wrapping"/>
                                                                            <span className="errormsg">{formErrors.IsWithdrawAllow}</span>       
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                <div className="col-lg-4">
                                                                    <label htmlFor="ScopeType" className="form-label">ScopeType</label>
                                                                    <input
                                                                        type="text"
                                                                        value={ cooperativeEdit.ScopeType}
                                                                        className="form-control form-control-sm mb-1"
                                                                        onChange={handleChange}
                                                                        placeholder="ScopeType"
                                                                        aria-label="ScopeType"
                                                                        id="ScopeType"
                                                                        name="ScopeType"
                                                                        aria-describedby="addon-wrapping"/>
                                                                        <span className="errormsg">{formErrors.ScopeType}</span>       
                                                                  </div>
                                                                  <div className="col-lg-4">
                                                                    <label htmlFor="ShowHideBalance" className="form-label">Show Hide Balance</label>
                                                                    <input
                                                                        type="text"
                                                                        value={ cooperativeEdit.ShowHideBalance}
                                                                        className="form-control form-control-sm mb-1"
                                                                        onChange={handleChange}
                                                                        placeholder="ShowHideBalance"
                                                                        aria-label="ShowHideBalance"
                                                                        id="ShowHideBalance"
                                                                        name="ShowHideBalance"
                                                                        aria-describedby="addon-wrapping"/>
                                                                        <span className="errormsg">{formErrors.ShowHideBalance}</span>       
                                                                  </div>
                                                                  <div className="col-lg-4">
                                                                    <label htmlFor="AllowMultiDate" className="form-label">Allow Multi Date</label>
                                                                    <input
                                                                        type="text"
                                                                        value={ cooperativeEdit.AllowMultiDate}
                                                                        className="form-control form-control-sm mb-1"
                                                                        onChange={handleChange}
                                                                        placeholder="AllowMultiDate"
                                                                        aria-label="AllowMultiDate"
                                                                        id="AllowMultiDate"
                                                                        name="AllowMultiDate"
                                                                        aria-describedby="addon-wrapping"/>
                                                                        <span className="errormsg">{formErrors.AllowMultiDate}</span>       
                                                              </div>

                                                                </div>
                                                <div className="row">                                                      
                                                       
                                                         <div className="col-lg-4">
                                                             <label htmlFor="CreatedUserID" className="form-label">Created UserID</label>
                                                            <input
                                                                type="text"
                                                                value={ cooperativeEdit.CreatedUserID}
                                                                className="form-control form-control-sm mb-1"
                                                                onChange={handleChange}
                                                                placeholder="CreatedUserID"
                                                                aria-label="CreatedUserID"
                                                                id="CreatedUserID"
                                                                name="CreatedUserID"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.AllowMultiDate}</span>       
                                                         </div>
                                            {/* </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12"> */}

                                                    
                                                        <div className="col-lg-4">  
                                                        <label htmlFor="Address" className="form-label">Address</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-1"
                                                                placeholder="Address"
                                                                aria-label="Address"
                                                                name="address"
                                                                id="Address" 
                                                                value={cooperativeEdit.address} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.address}</span>
                                                        </div>
                                                        <div className="col-lg-4">
                                                        <label htmlFor="creditlimit" className="form-label">Credit Limit</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-1"
                                                                value={ cooperativeEdit.creditlimit} onChange={handleChange}
                                                                placeholder="Credit Limit"
                                                                aria-label="Credit Limit"
                                                                name="creditlimit"
                                                                id="creditlimit"
                                                                aria-describedby="addon-wrapping"/>
                                                                 <span className="errormsg">{formErrors.creditlimit}</span>
                                                        </div>
                                                        </div> 
                                           <div className="row">
                                            <div className="col-lg-4">
                                                <label htmlFor="Logo" className="form-label">Logo</label>
                                                    <input
                                                        type="text"
                                                        value={ cooperativeEdit.logo}
                                                        className="form-control form-control-sm mb-1"
                                                        onChange={handleChange}
                                                        placeholder="Logo"
                                                        aria-label="Logo"
                                                        id="Logo"
                                                        name="logo"
                                                        aria-describedby="addon-wrapping"/>
                                                         <span className="errormsg">{formErrors.logo}</span>       
                                            </div>
                                            <div className="col-lg-4" >
                                                <label htmlFor="ColorCode" className="form-label">Color Code</label>
                                                    <input
                                                        type="text"
                                                        value={ cooperativeEdit.ColorCode}
                                                        className="form-control form-control-sm mb-1"
                                                        onChange={handleChange}
                                                        placeholder="ColorCode"
                                                        aria-label="ColorCode"
                                                        id="ColorCode"
                                                        name="ColorCode"
                                                        aria-describedby="addon-wrapping"/>
                                                         <span className="errormsg">{formErrors.ColorCode}</span>       
                                            </div>
                                                       
                                                         
                                                        <div className="col-lg-4" >
                                                             <label htmlFor="CbsURL" className="form-label">Cbs URL</label>
                                                            <input
                                                                type="text"
                                                                value={ cooperativeEdit.CbsURL}
                                                                className="form-control form-control-sm mb-1"
                                                                onChange={handleChange}
                                                                placeholder="CbsURL"
                                                                aria-label="CbsURL"
                                                                id="CbsURL"
                                                                name="CbsURL"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.CbsURL}</span>       
                                                         </div>
                                                   
                                                         </div>
                                                        
                                                                                                                 
                                        </div>
                                    </div>
                                    <div className="container">
                                    <div className="row ">

                                        <div className="  col-lg-12 col-md-12 col-sm-12 text-right p-0  my-3 col-12">

                                            <button className="btn btn-primary mx-2 addresbtn" onClick={handleAddCooperative} >{edit ? 'Edit' : 'ADD'} </button>
                                            <button className="btn btn-danger  addresbtn" onClick={handleReset}> RESET</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
            </div>
        )
        : "";
}

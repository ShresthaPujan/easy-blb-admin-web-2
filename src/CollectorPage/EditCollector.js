import React,{useState ,useEffect,useContext , useRef} from 'react';
import collectorContext from '../component/Collector/collectorContext';
export default function EditCollector(props) {

    const context = useContext(collectorContext)
    const {collectorEdit,setCollectorEdit,edit,setEdit,editCollector} = context;
        

    // const initalvalue = props.item;
     const ref = useRef(null); 
  
    const [formErrors, setformErrors] = useState({error:1});
    const [isSubmitcollector, setIsSubmitcollector] = useState(false);
    const [first, setfirst] = useState({});

    const handleChange =(e)=>{
        const{name , value} = e.target;
        setCollectorEdit({ ...collectorEdit,[name]:value});
    };

    
    const handlePopupClose = (e) =>{    
        e.preventDefault();
        props.setEtrigger(false);
        setformErrors({})
    }
    

    const handleEditCollector =(e) =>{
        e.preventDefault();
        setformErrors(validate(collectorEdit));
           
    }
  
    
useEffect(() => {
    if(Object.keys(formErrors).length === 0){
        setIsSubmitcollector(true);    
        console.log("no error")
    }
},[formErrors]);

useEffect(()=>{
    console.log(isSubmitcollector)
    if(isSubmitcollector){
        editCollector(collectorEdit)
        setIsSubmitcollector(false)
        setformErrors({ error: 1 });
        props.setEtrigger(false)
        setCollectorEdit({})
       }
},[isSubmitcollector])

const handleReset =(event)=>{
    event.preventDefault();
    setCollectorEdit({
            CoOperativeCode: "",
            FullName: "",
            branchID: "",
            UserName: "",
            CollectorID: "",
            TAddress: "",
            IsActive: "",
            PhNum: "",
            Email: "",
            FatherName: "",
            Guarantee: "",
            EmergencyContact: "",
            IMEI_NUM: "",
            activateInactivate: "",
            NameNepali: "",
            createdUserID: "",
            IsAllowSignature:""
            
    })
    setformErrors({reset:1})
    
   
}

    const  validate = (values) => {
        const errors ={}
        const numv = /^[0-9]+$/i;
       
        
    
        if(!values.CollectorID){
            errors.CollectorID = "Collector ID  is required";
        }
        if(!values.UserName){
            errors.UserName = "UserName  is required";
        }
        if(!values.FullName){
            errors.FullName = "FullName  is required";
        }
        if(!values.CoOperativeCode){
            errors.CoOperativeCode = "CoOperativeCode is required";
        }
        if(!values.IsActive){
            errors.IsActive = "Is Active is required";
        }
        if(!values.Email){
            errors.Email = "Email is required";
        }
        if(!values.Guarantee){
            errors.Guarantee = "Guarantee is required";
        }
        if(!values.Address){
            errors.Address = "Address is required";
        }
        if(!values.PhNum){
            errors.PhNum = "Phone Number is required";
        }
        if(!values.FatherName){
            errors.FatherName = "Father Name is required";
        }

        if(!values.EmergencyContact){
            errors.EmergencyContact = "Emergency Contact is required";
        }
        if(!values.IsAllowSignature){
            errors.IsAllowSignature = "Is AllowSignature is required";
        }

        return errors;
    }
    
 
    return (props.etrigger)
        ? (
            <div className="popUP container-fluid  col-lg-12 col-md-12 col-sm-12 col-xs-12">   
                    <div className="popup-inner container-fluid p-4 ">
                         <button className='btn closebtn' ref ={ref} onClick={handlePopupClose}><i className="bi bi-x"></i></button>
                        <form action="">
                                <div className="col-lg-12 col-md-12 col-sm-12">        
                                    {props.children}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div >
                                                        <label htmlFor="CoOperativeCode" className="form-label">Cooperative Code</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={collectorEdit.CoOperativeCode} onChange={handleChange}
                                                                name="CoOperativeCode"
                                                                placeholder="CoOperativeCode"
                                                                aria-label="CoOperativeCode"
                                                                id="CoOperativeCode"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.BranchID}</span>
                                                        </div>
                                                    
                                                        <div >
                                                        <label htmlFor="BranchID" className="form-label">Branch ID</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={collectorEdit.branchID} onChange={handleChange}
                                                                name="branchID"
                                                                placeholder="Branch ID"
                                                                aria-label="Branch ID"
                                                                id="BranchID"
                                                              
                         
                                                                aria-describedby="addon-wrapping"/>
                                                                  <span className="errormsg">{formErrors.BranchID}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="CollectorID" className="form-label">Collector ID</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={collectorEdit.CollectorID} onChange={handleChange}
                                                                placeholder="Collector ID"
                                                                aria-label="Collector  ID"
                                                                name="CollectorID"
                                                                id="CollectorID"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.CollectorID}</span>
                                                        </div>
                                                 
                                                        <div >  
                                                        <label htmlFor="IsActive" className="form-label">Is Active</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                placeholder="Is Active"
                                                                aria-label="Is Active"
                                                                name="IsActive"
                                                                id="IsActive" 
                                                                value={collectorEdit.IsActive} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.IsActive}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="Email" className="form-label">Email</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.Email} onChange={handleChange}
                                                                placeholder="Email"
                                                                aria-label="Email"
                                                                name="Email"
                                                                id="Email"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Email}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="Guarantee" className="form-label">Guarantee</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.Guarantee} onChange={handleChange}
                                                                placeholder="Guarantee"
                                                                aria-label="Guarantee"
                                                                name="Guarantee"
                                                                id="Guarantee"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Guarantee}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="IMEI_NUM" className="form-label">IMEI_NUM</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.IMEI_NUM} onChange={handleChange}
                                                                placeholder="IMEI_NUM"
                                                                aria-label="IMEI_NUM"
                                                                name="IMEI_NUM"
                                                                id="IMEI_NUM"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.IMEI_NUM}</span>
                                                      </div>
                                                     
                                                      <div >
                                                        <label htmlFor="NameNepali" className="form-label">Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.NameNepali} onChange={handleChange}
                                                                placeholder="NameNepali"
                                                                aria-label="NameNepali"
                                                                name="NameNepali"
                                                                id="NameNepali"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.NameNepali}</span>
                                                      </div>
  
                                            </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                    <div >
                                                        <label htmlFor="FullName" className="form-label">Fullname</label>   
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.FullName} onChange={handleChange}
                                                                placeholder="Fullname"
                                                                name="FullName"
                                                                id="FullName"
                                                                aria-label="Fullname"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.FullName}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="Username" className="form-label">Username</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.UserName} onChange={handleChange}
                                                                placeholder="Username"
                                                                aria-label="Username"
                                                                name="UserName "
                                                                id="Username"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.UserName}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="Address" className="form-label">Address</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.Address} onChange={handleChange}
                                                                placeholder="Address"
                                                                aria-label="Address"
                                                                name="Address"
                                                                id="Address"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Address}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="PhNum" className="form-label">PhNum</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.PhNum} onChange={handleChange}
                                                                placeholder="PhNum"
                                                                aria-label="PhNum"
                                                                name="PhNum"
                                                                id="PhNum"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.PhNum}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="FatherName" className="form-label">FatherName</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.FatherName} onChange={handleChange}
                                                                placeholder="FatherName"
                                                                aria-label="FatherName"
                                                                name="FatherName"
                                                                id="FatherName"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.FatherName}</span>
                                                      </div>

                                                      <div >
                                                        <label htmlFor="EmergencyContact" className="form-label">EmergencyContact</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.EmergencyContact} onChange={handleChange}
                                                                placeholder="EmergencyContact"
                                                                aria-label="EmergencyContact"
                                                                name="EmergencyContact"
                                                                id="EmergencyContact"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.EmergencyContact}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="ActiveInActive" className="form-label">Active</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm  mb-1"
                                                                value={ collectorEdit.activateInactivate} onChange={handleChange}
                                                                placeholder="ActiveInActive"
                                                                aria-label="ActiveInActive"
                                                                name="ActiveInActive"
                                                                id="ActiveInActive"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.ActiveInActive}</span>
                                                      </div>
                                                      <div className='position-relative'>
                                                        <label htmlFor="IsAllowSignature" className="form-label">
                                                                Allow Signature
                                                                </label>
                                                                <select
                                                                style={{ fontSize: "11px" }}
                                                                value={collectorEdit.IsAllowSignature}
                                                                name="IsAllowSignature"
                                                                onChange={handleChange}
                                                                className={`form-control form-control-sm mb-1  ${
                                                                    formErrors.IsAllowSignature ? "errorBorder" : ""
                                                                }`}
                                                                >
                                                                <option value="" selected style={{ fontSize: "11px" }}>
                                                                    select Signature
                                                                </option>
                                                                <option value="Y">Yes</option>
                                                                <option value="N">No</option>
                                                                </select>
                                                                <i class="fas fa-angle-down  position-absolute "></i>
                                                </div>
                                                      
                                                                        
                                        </div>
                                    </div>
                                    <div className="container">
                                    <div className="row ">

                                        <div className="  col-lg-12 col-md-12 col-sm-12 text-right p-0  my-3 col-12">

                                            <button className="btn btn-primary mx-2 addresbtn" onClick={handleEditCollector} >Edit </button>
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

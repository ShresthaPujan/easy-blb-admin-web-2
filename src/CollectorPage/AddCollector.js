import React,{useState ,useEffect,useContext , useRef} from 'react';
import collectorContext from '../component/Collector/collectorContext';
export default function AddCollector(props) {

    const context = useContext(collectorContext)
    const {addCollector,collectorEdit,setCollectorEdit,edit,setEdit} = context;
        
 
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
        props.setTriggerc(false);
        setformErrors({reset:1})
    }

    const handleAddCollector =(e) =>{
        e.preventDefault();
        setformErrors(validate(collectorEdit));
        console.log("clicked");
           
    }
  

useEffect(() => {
    if(Object.keys(formErrors).length === 0){
        setIsSubmitcollector(true);    
        console.log("no error")
    }
},[formErrors]);

useEffect(()=>{
    
    if(isSubmitcollector){
        const collectorData = {
            CoOperativeCode: collectorEdit.CoOperativeCode ,
            Fullname: collectorEdit.Fullname,
            IsActive:  collectorEdit.IsActive,
            BranchID:  collectorEdit.BranchID,
            FatherName:collectorEdit.FatherName,
            UserName:collectorEdit.UserName,  
            IMEI_NUM:collectorEdit.IMEI_NUM, 
            TAddress:collectorEdit.TAddress,
            PAddress:collectorEdit.PAddress, 
            Email: collectorEdit.Email, 
            PhNum:collectorEdit.PhNum, 
            EmergencyContact:collectorEdit.EmergencyContact, 
            Guarantee:collectorEdit.Guarantee, 
            ActiveInActive:collectorEdit.ActiveInActive, 
            NameNepali:collectorEdit.NameNepali, 
            createdUserID:collectorEdit.createdUserID,
        }
     
        addCollector(collectorData );
            setIsSubmitcollector(false)
            props.setTriggerc(false)
            setCollectorEdit({
                error:1
            })
        }
},[isSubmitcollector])

const handleReset =(event)=>{
    event.preventDefault();
    setCollectorEdit({
        BranchID:"", 
        CollectorID:"", 
        Fullname:"",
        IsActive:"",
        Username:""
    })
    setformErrors({reset:1})
}

    const  validate = (values) => {
        const errors ={}
        const numv = /^[0-9]+$/i;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       
        if(!values.BranchID){
         errors.BranchID = "Branch ID is required";
        }
    
        if(!values.UserName){
            errors.UserName = "UserName  is required";
        }
        if(!values.Fullname){
            errors.Fullname = "Fullname  is required";
        }
        if(!values.IsActive){
            errors.IsActive = "IsActive is required";
        }

        if(!values.CoOperativeCode){
            errors.CoOperativeCode = "CoOperativeCode is required";
        }
        if(!values.IMEI_NUM){
            errors.IMEI_NUM = "IMEI_NUM is required";
        }
        if(!values.FatherName){
            errors.FatherName = "FatherName is required";
        }
        if(!values.TAddress){
            errors.TAddress = "TAddress is required";
        }
        if(!values.PAddress){
            errors.PAddress = "PAddress is required";
        }
        if(!values.PhNum){
            errors.PhNum = "PhNum is required";
        }
        else if(!numv.test(values.PhNum)){
            errors.PhNum = "Please enter number only";
          }
        if(!values.Email){
            errors.Email = "Email is required";
        } else if (!regex.test(values.Email)) 
               {
                   errors.Email="this is not a valid email format"
               }
        if(!values.EmergencyContact){
            errors.EmergencyContact = "EmergencyContact is required";
        }
        else if(!numv.test(values.EmergencyContact)){
            errors.EmergencyContact = "Please enter number only";
          }
        if(!values.Guarantee){
            errors.Guarantee = "Guarantee is required";
        }
        if(!values.ActiveInActive){
            errors.ActiveInActive = "ActiveInActive is required";
        }
        if(!values.createdUserID){
            errors.createdUserID = "createdUserID is required";
        }
        if(!values.NameNepali){
            errors.NameNepali = "NameNepali is required";
        }
        return errors;
    }
    
 
    return (props.triggerc)
        ? (
            <div className="popUP container-fluid  col-lg-12 col-md-12 col-sm-12 col-xs-12">   
                    <div className="popup-inner container p-4 ">
                         <button className='btn closebtn' ref ={ref} onClick={handlePopupClose}><i className="bi bi-x"></i></button>
                        <form action="">
                                <div className="col-lg-12 col-md-12 col-sm-12">        
                                    {props.children}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <div >  
                                                            <label htmlFor="CoOperativeCode" className="form-label">CoOperativeCode</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control mb-1"
                                                                    placeholder="CoOperativeCode"
                                                                    aria-label="CoOperativeCode"
                                                                    name="CoOperativeCode"
                                                                    id="CoOperativeCode" 
                                                                    value={collectorEdit.CoOperativeCode} onChange={handleChange}
                                                                    aria-describedby="addon-wrapping"/>
                                                            
                                                            <span className="errormsg">{formErrors.IsActive}</span>
                                                            </div>

                                                    
                                                        <div >
                                                        <label htmlFor="Fullname" className="form-label">Full Name</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={collectorEdit.Fullname} onChange={handleChange}
                                                                name="Fullname"
                                                                placeholder="FullName"
                                                                aria-label="Fullname"
                                                                id="Fullname"
                                                                aria-describedby="addon-wrapping"/>
                                                                  <span className="errormsg">{formErrors.Fullname}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="IsActive" className="form-label">Is Active</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={collectorEdit.IsActive} onChange={handleChange}
                                                                placeholder="IsActive"
                                                                aria-label="IsActive"
                                                                name="IsActive"
                                                                id="IsActive"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.IsActive}</span>
                                                        </div>
                                                     
                                                         <div >  
                                                        <label htmlFor="UserName" className="form-label">UserName</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                placeholder="UserName"
                                                                aria-label="UserName"
                                                                name="UserName"
                                                                id="UserName" 
                                                                value={collectorEdit.UserName} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.UserName}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="IMEI_NUM" className="form-label">IMEI NUM</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={collectorEdit.IMEI_NUM} onChange={handleChange}
                                                                name="IMEI_NUM"
                                                                placeholder="IMEI_NUM"
                                                                aria-label="IMEI_NUM"
                                                                id="IMEI_NUM"
                                                              
                         
                                                                aria-describedby="addon-wrapping"/>
                                                                  <span className="errormsg">{formErrors.IMEI_NUM}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="FatherName" className="form-label">FatherName</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={collectorEdit.FatherName} onChange={handleChange}
                                                                placeholder="FatherName"
                                                                aria-label="FatherName"
                                                                name="FatherName"
                                                                id="FatherName"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.FatherName}</span>
                                                        </div>
                                                 
                                                        <div >  
                                                        <label htmlFor="PAddress" className="form-label">Permanent Address</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                placeholder="Is Active"
                                                                aria-label="Is Active"
                                                                name="PAddress"
                                                                id="PAddress" 
                                                                value={collectorEdit.PAddress} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.PAddress}</span>
                                                        </div>
                                                   
                                                        <div >  
                                                        <label htmlFor="createdUserID" className="form-label">created User ID</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                placeholder="createdUserID"
                                                                aria-label="createdUserID"
                                                                name="createdUserID"
                                                                id="createdUserID" 
                                                                value={collectorEdit.createdUserID} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.createdUserID}</span>
                                                        </div>
  
                                            </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                      
                                                          <div >  
                                                            <label htmlFor="TAddress" className="form-label">Temporary Address</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control mb-1"
                                                                    placeholder="TAddress"
                                                                    aria-label="TAddress"
                                                                    name="TAddress"
                                                                    id="TAddress" 
                                                                    value={collectorEdit.TAddress} onChange={handleChange}
                                                                    aria-describedby="addon-wrapping"/>
                                                            
                                                            <span className="errormsg">{formErrors.TAddress}</span>
                                                            </div>
                                                            <div >  
                                                            <label htmlFor="Email" className="form-label">Email</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control mb-1"
                                                                    placeholder="Email"
                                                                    aria-label="Email"
                                                                    name="Email"
                                                                    id="Email" 
                                                                    value={collectorEdit.Email} onChange={handleChange}
                                                                    aria-describedby="addon-wrapping"/>
                                                            
                                                            <span className="errormsg">{formErrors.Email}</span>
                                                            </div>
                                                  <div >
                                                        <label htmlFor="PhNum" className="form-label">PhNum</label>   
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.PhNum} onChange={handleChange}
                                                                placeholder="PhNum"
                                                                name="PhNum"
                                                                id="PhNum"
                                                                aria-label="PhNum"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.PhNum}</span>
                                                        </div>

                                                    <div >
                                                        <label htmlFor="EmergencyContact" className="form-label">EmergencyContact</label>   
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.EmergencyContact} onChange={handleChange}
                                                                placeholder="EmergencyContact"
                                                                name="EmergencyContact"
                                                                id="EmergencyContact"
                                                                aria-label="EmergencyContact"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.EmergencyContact}</span>
                                                        </div>
                                        
                                                        <div >
                                                        <label htmlFor="Guarantee" className="form-label">Guarantee</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.Guarantee} onChange={handleChange}
                                                                placeholder="Guarantee"
                                                                aria-label="Guarantee"
                                                                name="Guarantee"
                                                                id="Guarantee"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Guarantee}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="BranchID" className="form-label">Branch ID</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={collectorEdit.BranchID} onChange={handleChange}
                                                                name="BranchID"
                                                                placeholder="Branch ID"
                                                                aria-label="Branch ID"
                                                                id="BranchID"
                                                                aria-describedby="addon-wrapping"/>
                                                                  <span className="errormsg">{formErrors.BranchID}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="ActiveInActive" className="form-label">ActiveI nActive</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={collectorEdit.ActiveInActive} onChange={handleChange}
                                                                placeholder="ActiveInActive"
                                                                aria-label="ActiveInActive"
                                                                name="ActiveInActive"
                                                                id="ActiveInActive"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.ActiveInActive}</span>
                                                        </div>
                                                 
                                                        <div >  
                                                        <label htmlFor="NameNepali" className="form-label">Name Nepali</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                placeholder="NameNepali"
                                                                aria-label="NameNepali"
                                                                name="NameNepali"
                                                                id="NameNepali" 
                                                                value={collectorEdit.NameNepali} onChange={handleChange}
                                                                aria-describedby="addon-wrapping"/>
                                                        
                                                        <span className="errormsg">{formErrors.NameNepali}</span>
                                                        </div>
                                                                        
                                        </div>
                                    </div>
                                    <div className="container">
                                    <div className="row ">

                                        <div className="  col-lg-12 col-md-12 col-sm-12 text-right p-0  my-3 col-12">

                                            <button className="btn btn-primary mx-2 addresbtn" onClick={handleAddCollector} >{edit ? 'Edit' : 'ADD'} </button>
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

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
    
    if(isSubmitcollector){
        
        editCollector(
            collectorEdit.CollectorID,
            collectorEdit.Fullname,
            collectorEdit.IsActive,
            collectorEdit.Username );
            console.log("test");
            setIsSubmitcollector(false)
            props.setEtrigger(false)
            // setCollectorEdit({
            //     BranchID:"", 
            //     CollectorID:"", 
            //     Fullname:"",
            //     IsActive:"",
            //     Username:""
            // })
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
       
        if(!values.BranchID){
         errors.BranchID = "Branch ID is required";
        }
    
        if(!values.CollectorID){
            errors.CollectorID = "Collector ID  is required";
        }
        if(!values.Username){
            errors.Username = "Username  is required";
        }
        if(!values.Fullname){
            errors.Fullname = "Fullname  is required";
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


        return errors;
    }
    
 
    return (props.etrigger)
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
                                                        <label htmlFor="CoOperativeCode" className="form-label">Cooperative Code</label>    
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
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
                                                        <label htmlFor="CollectorID" className="form-label">Collector ID</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
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
                                                                className="form-control mb-1"
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
                                                                className="form-control mb-1"
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
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.Guarantee} onChange={handleChange}
                                                                placeholder="Guarantee"
                                                                aria-label="Guarantee"
                                                                name="Guarantee"
                                                                id="Guarantee"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Guarantee}</span>
                                                      </div>
  
                                            </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                    <div >
                                                        <label htmlFor="Fullname" className="form-label">Fullname</label>   
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.Fullname} onChange={handleChange}
                                                                placeholder="Fullname"
                                                                name="Fullname"
                                                                id="Fullname"
                                                                aria-label="Fullname"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Fullname}</span>
                                                        </div>
                                                        <div >
                                                        <label htmlFor="Username" className="form-label">Username</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.Username} onChange={handleChange}
                                                                placeholder="Username"
                                                                aria-label="Username"
                                                                name="Username"
                                                                id="Username"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.Username}</span>
                                                      </div>
                                                      <div >
                                                        <label htmlFor="Address" className="form-label">Address</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-1"
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
                                                                className="form-control mb-1"
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
                                                                className="form-control mb-1"
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
                                                                className="form-control mb-1"
                                                                value={ collectorEdit.EmergencyContact} onChange={handleChange}
                                                                placeholder="EmergencyContact"
                                                                aria-label="EmergencyContact"
                                                                name="EmergencyContact"
                                                                id="EmergencyContact"
                                                                aria-describedby="addon-wrapping"/>
                                                                <span className="errormsg">{formErrors.EmergencyContact}</span>
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

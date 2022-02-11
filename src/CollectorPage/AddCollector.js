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
        setformErrors({})
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
        console.log(isSubmitcollector)
        addCollector(
            collectorEdit.BranchID,
            collectorEdit.CollectorID,
            collectorEdit.Fullname,
            collectorEdit.IsActive,
            collectorEdit.Username );
            setIsSubmitcollector(false)
            props.setTriggerc(false)
            setCollectorEdit({
                BranchID:"", 
                CollectorID:"", 
                Fullname:"",
                IsActive:"",
                Username:""
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
        if(!values.IsActive){
            errors.IsActive = "IsActive is required";
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

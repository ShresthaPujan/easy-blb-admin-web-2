import React, { useEffect , useCallback,Component , useState ,useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import '../style.css';
import AddCooperative from './AddCollector';
import Spinner from '../component/Spinner/Spinner'
import { Alert } from '../component/Alert';
import collectorContext from '../component/Collector/collectorContext';
import AddCollector from './AddCollector';
import EditCollector from './EditCollector';
import useEscapse from '../component/hooks/Use-escape';
import Select from 'react-select'
import AddNewpopup from './AddNewpopup';

export default function Collector() {

   
    const [editpopup, setEditPopup] = useState(false);
    
    
    const [searchTerm,setSearchTerm] = useState("");
    const context = useContext(collectorContext)
    const contextCooperative = useContext(cooperativeContext)
    const {resetPassword,cooperative,setAlert,alert}=contextCooperative;
    const {edit,popup, setPopup,cooperativeCode, setCooperativeCode,resetpassword,deactivateCollector,loading,getCollectorInfo,getCollector,collector,collectorEdit,setCollectorEdit,setEdit} = context;
   

 
  useEffect(() => { 
    getCollector()  
    
  }, []);
 
   useEscapse(setPopup);

  const handleAddCollector= (e,cooperativeCode) =>{
    e.preventDefault();
    setEdit(false);
    setPopup(true);

}

const handleSearch = (e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    
}
const handleEdit = (item) =>{
    setPopup(true);
    setEdit(true);
    getCollectorInfo(item).then(data => {
        console.log(data)
       const collData = {
        CoOperativeCode: "YT47",
        FullName: data.FullName,
        branchID: data.branchID,
        UserName:  data.UserName,
        CollectorID: data.CollectorID,
        TAddress:  data.collTempAddress,
        PAddress:data.collPermAddress,
        PhNum:  data.collPhone,
        Email:  data.collMail,
        FatherName: data.collFather,
        Guarantee:  data.collGuaranteel,
        EmergencyContact: data.collEmergencyContact,
        activateInactivate: data.activateInactivate,
        NameNepali: data.nameNepali,
        IsAllowSignature:data.IsAllowSignature,

          }
          console.log(collData)
        setCollectorEdit(collData)
    })
        setEditPopup(true);
}
const coopCodeGet =(value) =>{ 
    getCollector(value.value)
    cooperativeInfo(value.value)
    setCooperativeCode(value)
    console.log(value)

}
const [infoCoop, setinfoCoop] = useState({})

const cooperativeInfo = (value="YT47") =>{
    let newCoopCOde= JSON.parse(JSON.stringify(cooperative))
    var infoArray = []
    for (var index = 0; index < newCoopCOde.length; index++){
        if(newCoopCOde[index].CoOperativeCode === value){
            setinfoCoop({
                CoOperativeName:newCoopCOde[index].CoOperativeName,
                licenseExpiry :newCoopCOde[index].licenseExpiry,
                 Address :newCoopCOde[index].Address
            })
        }
}   
}
const handleDeacivate = (collId,IsActive) =>{
    deactivateCollector(collId,IsActive)
}
const checkIspaid =(isPaid)=>{
    if(isPaid === "Active"){
        return "Deactivate"
    }
    else{
        return "Activate"
    }
}
const [username, setUsername] = useState()
const handleResetPassword = (username)=>{
    setAlert({
        fade:'fade-in',
        msg:"Do you want to Reset Password ?",
        type:"reset"
    })
    setUsername(username)
}
useEffect(() => {
    if(resetPassword){
    resetpassword(username)
    setUsername()
    setAlert({fade:'fade-default',msg:'',type:''})
    }
}, [resetPassword])


const [ncooperativecode, setCoperativeCode] = useState([])
useEffect(() => {
    let newCoopCOde= JSON.parse(JSON.stringify(cooperative))
    var options =[];
    for (var index = 0; index < newCoopCOde.length; index++){
      var ojj ={
        value:newCoopCOde[index].CoOperativeCode,
        label:newCoopCOde[index].CoOperativeCode
      }  
      options.push(ojj)
    
    }
    cooperativeInfo()
    setCoperativeCode(options)

    coopCodeGet("YT47")

}, [])

        
   
  return <>
   <div className="col-lg-12 col-md-12 col-sm-12 contentMainSection">
   <div>
                                  <div className="fontHeader">Collector List</div>              
                                                    <hr style={{color:"#f1f2f3"}}/>
                                                </div>
                           <section className="content-section main-content">
                                <div className="content">
                                        <div className=" col-lg-12 col-sm-12">
                                            <div className="container-fluid ">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-4 col-sm-4 p-0 py-2 Search">
                                                        <input type="text" placeholder="Search"   onChange={handleSearch}  />
                                                        <i className="fas fa-search"></i>                                
                                                    </div>
                                                    <div className="col-lg-2 col-md-4 col-sm-4 p-2 Search">
                                                    <Select  className="selectT"     options={ncooperativecode} onChange={coopCodeGet}
                                                    defaultValue={{ label: "YT47", value: "YT47" }} />                                                     
                                                    </div>     
                                                                                         
                                                    <div className="col-lg-6 offset-lg-2 offset-md-0  offset-sm-0 col-md-4 col-sm-4 text-end p-0 py-2 ">
                                                         <button className="btn btn-sm btn-cmpy"   onClick={(e)=>handleAddCollector(e,cooperativeCode)}> Add Collector +</button>
                                                     </div>
                                                    </div>
                                                </div>
                                                <div className="container-fluid pb-2 ">
                                                    <div className="row">
                                                    <div className=" col-lg-4  col-md-4  col-sm-4 testsearch text-dark Search p-0 py-2" >
                                                        <div className="py-2 p-0">Cooperative Name</div>
                                                        <div><input type="text" disabled  value={infoCoop.CoOperativeName} name="" id="" /></div>
                                    
                                                    </div>
                
                                                    <div className="col-lg-4  col-md-4  col-sm-4 p-2 testsearch text-dark Search p-0" >
                                                        <div className="py-2">License Expiry</div>
                                                        <div><input type="text" disabled     value={infoCoop.licenseExpiry?.split("T")[0]} name="" id="" /></div>
                                    
                                                    </div>
                                                    <div className=" col-lg-4  col-md-4  col-sm-4 p-2  col-lg-2 text-dark Search ">
                                                    <div className="py-2">Address</div>
                                                    <div><input type="text"  disabled value={infoCoop.Address} id="" /></div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                { <div className="row">
                                                    <div className="ramram">
                                                    <div className="col-lg-12 ">
                                                    {loading ? (<Spinner/>) :(  
                                                    <div className="outer-wrapper" style={{maxWidth:"100%"}}>
                                                    <div className="table-wrapper" style={{margin:"3px",height:"300px"}}>
                                                    <table className="table table-striped">
                                                    
                                                        <thead>
                                                            <tr className='tableHead'>
                                                                <td>S.N.</td>
                                                              
                                                                <td className="tl">Username</td>
                                                                <td className='tl' style={{ width: "150px"}}>Fullname</td>
                                                                <td className='tc'> Is Active</td>
                                                                <td className='tc' style={{ width: "297px"}}> Action</td>
                                                            </tr>
                                                        </thead>
                                                      
                                                        <tbody>
           
                                                   {collector.length > 0 ? collector.filter((item)=>{
                                                        if (searchTerm === ""){
                                                            return item
                                                        } else if(item.UserName.toLowerCase().includes(searchTerm.toLowerCase())||
                                                                     item.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                                                            return item
                                                        }
                                                    }).map((item,i) => 
                                                      
                                                    <tr key={i+1}>
                                                                    <td className='tc'>{i + 1}</td>
                                                            
                                                                    <td  className="tl">{item.UserName}</td>                       
                                                                    <td className='tl'>{item.fullName}</td>
                                                                    <td className='tc'>{item.IsActive}</td>
                                                                    <td className='tc'><span className='editspan badge'   onClick={()=>handleEdit(item.CollectorID)}>Edit</span> 
                                                                    | <span className='deletespan badge deactivate' onClick={()=>handleDeacivate(item.CollectorID,item.IsActive)}>{checkIspaid(item.IsActive)}</span> |
                                                                     <span className='editspan badge'  onClick={()=>handleResetPassword(item.UserName)}>Reset Password</span></td>                                                               
  
                                                        </tr>
                                                   ):(
                                                       <tr className='tc'><td></td><td></td><td></td><td>No Data Found</td><td></td></tr>)}
                                                        </tbody>
                                                        
                                                        </table>
                                                       </div>
                                                       </div>
                                                      )} 
                                                    </div>
                                                    </div>
                                                </div> }
                                            
                                        
                                </div>
                            </section>
         </div>
         
        
   
         <AddCollector triggerc ={false} setTriggerc={setPopup} >
             <h4 >Add Collector</h4>
         </AddCollector>
        <EditCollector etrigger ={false} setEtrigger={setEditPopup}>
        <h4 >Edit Collector</h4>
     </EditCollector>        
    <AddNewpopup trigger ={popup} setTriggernew={setPopup}/>

  

  </>;
}

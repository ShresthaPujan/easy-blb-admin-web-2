import collectorContext from './collectorContext';

import { useState ,useContext} from "react";
import { useNavigate} from 'react-router-dom';

import cooperativeContext from '../Cooperative/cooperativeContext';

const CollectorState =(props) =>{
  const [edit, setEdit] = useState(false);
  let navigate = useNavigate();
  const contextCoop = useContext(cooperativeContext);
  const {msg,setMsg,setresetPassword} = contextCoop;
    const userinfo = JSON.parse(localStorage.getItem('userInfo'))
    const userid= userinfo.UserID;
    const collectorInital = []
    const [collector, setCollector] = useState( collectorInital);
    const [collectorEdit,setCollectorEdit]= useState({
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
    const [first, setfirst] = useState({})

    // /////////////// GET COLLECT ALL

   const getCollector = async(coopid="YT47")=> {   
        try{
          setLoading(true)
          const response = await fetch(`api2/BLBApi/Collector/CollectorLst?CoOperativeCode=${coopid}`);
          const jsonData = await response.json();
          if (jsonData.STATUS_CODE === "0"){
            setLoading(false)
            setCollector(jsonData.lstCollector)
          }else{
            setLoading(false)
            setCollector({})
          }
        
                   }
        catch(err) {
            throw err;
          
        }
      }

      //////// GET COLLECTOR INFO
      const getCollectorInfo = async(collectorId)=> {   
        try{
          const response = await fetch(`api2/BLBApi/Collector/GetCollectorInfo?CoOperativeCode=YT47&CollectorID=${collectorId}`);
          return response.json();
        }  
        catch(err) {
            throw err;
          
        }
        
      }
        ///// ADD COLLECTOR
      const addCollector = async (collectorData) => {

        const response = await fetch ('api2/BLBApi/Collector/AddCollector',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(collectorData)
      });
          const collectordata = await response.json();          
        if(collectordata.STATUS_CODE === "0")
        {
          setCollector(collector.concat({
            BranchID:collectordata.lstCollector["0"].BranchID, CollectorID:collectordata.lstCollector["0"].CollectorID, fullName:collectordata.lstCollector["0"].fullName,IsActive:collectordata.lstCollector["0"].IsActive,UserName:collectordata.lstCollector["0"].UserName
          }))
          navigate("/collector")
          setMsg({
            msg:"Successfully Added",
            type:"alert alert-success"
  
          })
      } else if(collectordata.STATUS_CODE=== '005')
      {
        setMsg({
          msg:"UserName Alredy Exists. Please choose another Name.",
          type:"alert alert-danger"

        })
      }
      else if(collectordata.STATUS_CODE=== '004')
      {
        setMsg({
          msg:"UserName Alredy Exists. Please choose another Name.",
          type:"alert alert-danger"

        })
      }
      }
      
      //// EDIT COLLECTOR
      const editCollector = async (collectorEdits) =>{
        const response = await fetch ('api2/BLBApi/Collector/UpdateCollector',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(collectorEdits)
      });
          const collectorD = await response.json();
         
        if(collectorD.STATUS_CODE === "0")
          {

            let newCollector = JSON.parse(JSON.stringify(collector))
        // Logic to edit in client
        for (let index = 0; index < newCollector.length; index++) {
          const element = newCollector[index];
          if (element.UserName === collectorEdits.UserName) {            
            newCollector[index].fullName =collectorEdits.FullName
            newCollector[index].IsActive = collectorEdits.activateInactivate;
            break; 
          }
          setMsg({
            msg:"Edited Successfully",
            type:"alert alert-Success"
          })
    }  
    setCollector(newCollector);
      }
      else{
        setMsg({
          msg:"Something went Wrong",
          type:"alert alert-danger"
        })
      }
    }

    //////DEACTIVATE COLLECTOR
    const deactivateCollector = async(collId,IsActive) =>{
      
      const formData = {
       CoOperativeCode: "YT47",
       Status: "",
       CollectorID: collId,
       UpdatedUserID: userid
      }  
      if(IsActive === "Active"){
        formData.Status = "I"
      }else{
       formData.Status = "A"
      }
 
      setLoading(true)     
      const response = await fetch ('api2/BLBApi/Collector/StatusUpdates',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      });
      setLoading(false)
      const deactivatecoll = await response.json();     
      if(deactivatecoll.STATUS_CODE === "0")
        {
          let newCollact= JSON.parse(JSON.stringify(collector))
          var stats;
          var collectorStatus;
          // Logic to edit in client
          for (let index = 0; index < newCollact.length; index++) {
            const element = newCollact[index];
            if (element.CollectorID === collId) {
              
                if(formData.Status === "A"){
                   stats = "Active"
                   collectorStatus = "Activated"
                }else if(formData.Status === "I"){
                  stats = "Inactive"
                  collectorStatus = "Deactivated"
                }      
                newCollact[index].IsActive = stats;
              break; 
            }
          }          
          setCollector(newCollact);
          setMsg({
            msg:`Collector ${collectorStatus} Successfully`,
            type:"alert alert-success"
          })
        }else{
          setMsg({
            msg:"Something went Wrong",
            type:"alert alert-danger"
          })
        }
    }

    /// RESET PASSWORD
    
    const resetpassword = async (username) =>{
      console.log(username)
        const formData ={
            CoOperativeCode: "YT47",
            UserName: username,
            Pwd: "YT47"
        }
        console.log(formData)
        const response = await fetch ('api2/BLBApi/BLB/CollectorPwdReset',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        });
        const resetPassData = await response.json();
         if(resetPassData.STATUS_CODE === "0"){
          console.log(response)
          setMsg({
            msg:"Password Reset Successfully",
            type:"alert alert-success"
  
          })
          setresetPassword(false)
         }
         else{
        
          
          setMsg({
            msg:"Something went wrong. Please try again",
            type:"alert alert-danger"
  
          })
          setresetPassword(false)
         }
    }
  
   const [alert, setAlert] = useState(false);
   const [logoutdata, setLogout] = useState(false);
   const[menutoggle,setMenutoggle]=useState(false);
   const [loading, setLoading] = useState(false);
return (
    <collectorContext.Provider value={{resetpassword,deactivateCollector,userid,loading,getCollectorInfo,getCollector,editCollector,collector,collectorEdit,setCollectorEdit,edit,setEdit,addCollector}}>
      {props.children}
    </collectorContext.Provider>
  )

}
export default CollectorState;
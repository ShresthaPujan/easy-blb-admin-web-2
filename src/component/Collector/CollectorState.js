import collectorContext from './collectorContext';

import { useState ,useContext} from "react";
import { useNavigate} from 'react-router-dom';

import cooperativeContext from '../Cooperative/cooperativeContext';

const CollectorState =(props) =>{
  const [edit, setEdit] = useState(false);
  let navigate = useNavigate();
  const contextCoop = useContext(cooperativeContext);
  const {msg,setMsg} = contextCoop;
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
    })
    const [first, setfirst] = useState({})

   const getCollector = async()=> {   
        try{
          setLoading(true)
          const response = await fetch(`api2/BLBApi/Collector/CollectorLst?CoOperativeCode=YT47`);
          const jsonData = await response.json();
          setLoading(false)
          setCollector(jsonData.lstCollector)
                   }
        catch(err) {
            throw err;
          
        }
      }
      const getCollectorInfo = async(collectorId)=> {   
        try{
          const response = await fetch(`api2/BLBApi/Collector/GetCollectorInfo?CoOperativeCode=YT47&CollectorID=${collectorId}`);
          return response.json();
        }  
        catch(err) {
            throw err;
          
        }
        
      }

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
          console.log("add collector state")
      }
      }

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
            console.log("match")
            newCollector[index].fullName =collectorEdits.FullName
            newCollector[index].IsActive = collectorEdits.activateInactivate;
            break; 
          }
    }  
    setCollector(newCollector);
      }
    }
    const deactivateCollector = async(collId,IsActive) =>{
      
      const formData = {
       CoOperativeCode: "YT47",
       Status: "",
       CollectorID: collId,
       UpdatedUserID: userid
      }
      console.log(IsActive)
      if(IsActive === "Active"){
        formData.Status = "I"
      }else{
       formData.Status = "A"
      }
      setLoading(true)
      console.log(formData)
      const response = await fetch ('/BLBApi/Collector/StatusUpdates',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      });
      setLoading(false)
      const deactivatecoll = await response.json();
        console.log(deactivatecoll)
      if(deactivatecoll.STATUS_CODE === "0")
        {
          let newCollact= JSON.parse(JSON.stringify(collector))
          var stats;
          // Logic to edit in client
          for (let index = 0; index < newCollact.length; index++) {
            const element = newCollact[index];
            if (element.CollectorID === collId) {
              
                if(formData.Status === "A"){
                   stats = "Active"
                }else if(formData.Status === "I"){
                  stats = "Inactive"
                }
                console.log(stats)
                newCollact[index].IsActive = stats;
              break; 
            }
          }  
          console.log(newCollact)
          setCollector(newCollact);
        }
    }
    const resetpassword = async (username) =>{
        const formData ={
            CoOperativeCode: "YT47",
            UserName: username,
            Pwd: "YT47"
        }
        // const response = await fetch ('/BLBApi/BLB/CollectorPwdReset',{
        //   method:'POST',
        //   headers: {'Content-Type': 'application/json'},
        //   body:JSON.stringify(formData)
        // });
        // const resetPasswordData = await response.json();
       

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
import collectorContext from './collectorContext';

import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const CollectorState =(props) =>{
  const [edit, setEdit] = useState(false);
  let navigate = useNavigate();
    const collectorInital = []
    const [collector, setCollector] = useState( collectorInital);
    const [collectorEdit,setCollectorEdit]= useState({
      BranchID:"", 
      CollectorID:"", 
      Fullname:"",
      IsActive:"",
      Username:""
    })
    const [first, setfirst] = useState({})

   const getCollector = async()=> {   
        try{
          const response = await fetch(`api2/BLBApi/Collector/CollectorLst?CoOperativeCode=YT47`);
          const jsonData = await response.json();
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

      const editCollector = (BranchID, CollectorID, Fullname,IsActive,UserName) =>{

          console.log(UserName)
        let newCollector = JSON.parse(JSON.stringify(collector))
        // Logic to edit in client
        for (let index = 0; index < newCollector.length; index++) {
          const element = newCollector[index];
          if (element.UserName === UserName) {
            console.log("match")
            newCollector[index].IsActive = IsActive;
            break; 
          }
    }  
    setCollector(newCollector);
      }

    
   const [alert, setAlert] = useState(false);
   const [logoutdata, setLogout] = useState(false);
   const[menutoggle,setMenutoggle]=useState(false);
   
return (
    <collectorContext.Provider value={{getCollectorInfo,getCollector,editCollector,collector,collectorEdit,setCollectorEdit,edit,setEdit,addCollector}}>
      {props.children}
    </collectorContext.Provider>
  )

}
export default CollectorState;
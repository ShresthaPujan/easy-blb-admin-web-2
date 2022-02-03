import cooperativeContext from './cooperativeContext'

import { useState } from "react";


const CooperativeState =(props) =>{
    const cooperativeInital = [{
      logo:"a",
      CoOperativeCode: "a",
      cooperativename:'a',
      address:"d",
      noOfUser:'s',
      licenseExipry: 'd',
      creditlimit:'d',
      contactnumber:'d',
          },{
      logo:"a",
      CoOperativeCode: "b",
      cooperativename:'a',
      address:"d",
      noOfUser:'s',
      licenseExipry: 'd',
      creditlimit:'d',
      contactnumber:'d',
    },{
      logo:"a",
      CoOperativeCode: "c",
      cooperativename:'c',
      address:"d",
      noOfUser:'s',
      licenseExipry: 'd',
      creditlimit:'d',
      contactnumber:'d',
    }]
    const [cooperative, setCoperative] = useState( cooperativeInital);
    const [cooperativeEdit,setCoperativeEdit]= useState({
      logo:"",
      cooperaticecode: "",
      cooperativename:'',
      address:"",
      noOfUser:'',
      licenseExipry: '',
      creditlimit:'',
      contactnumber:'',
    })

   const getCoperative = async()=> {
        
        try{
          const response = await fetch(`api1/gharelukam/Getcoperative`);
          const jsonData = await response.json();
          setCoperative(jsonData)
                   }
        catch(err) {
            throw err;
          
        }
      }
    
   const [alert, setAlert] = useState(false);
   const [logoutdata, setLogout] = useState(false);
   const[menutoggle,setMenutoggle]=useState(false);
return (
    <cooperativeContext.Provider value={{menutoggle,setMenutoggle,logoutdata,setLogout,getCoperative,cooperative,setCoperative,cooperativeEdit,setCoperativeEdit,alert,setAlert}}>
      {props.children}
    </cooperativeContext.Provider>
  )

}
export default CooperativeState;
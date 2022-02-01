import cooperativeContext from './cooperativeContext'

import { useState } from "react";


const CooperativeState =(props) =>{
    const cooperativeInital = []
    const [cooperative, setCoperative] = useState(cooperativeInital);
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
    
   

return (
    <cooperativeContext.Provider value={{getCoperative,cooperative,setCoperative,cooperativeEdit,setCoperativeEdit}}>
      {props.children}
    </cooperativeContext.Provider>
  )

}
export default CooperativeState;
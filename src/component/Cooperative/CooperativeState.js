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
          const response = await fetch(`api2/BLBApi/BLB/GetCoOperativeList`);
          const jsonData = await response.json();
          setCoperative(jsonData.CopayLst)
                   }
        catch(err) {
            throw err;
          
        }
      }
    
      const addCoperative = async (address,contactnumber,cooperaticecode,cooperativename,creditlimit,logo,noOfUser)=>{
        const formData = {
              CoOperativeCode: cooperaticecode,
              UserName: cooperativename,
              NickName: "mizalsetting",
              Logo: "wefwefvwefcwe",
              ColorCode: "#434332",
              IsOnline: "Y",
              IsPaid: "Y",
              LicenceExpiry:"2022-01-31",
              ScopeType: "dfverver",
              CreditLimit: 90909.90,
              AllowedNumOFUser: 4,
              CbsURL: "vefverveverv",
              IsWithdrawAllow: "Y",
              AllowMultiDate: "Y",
              PAddress: "erverververv",
              ContactPerson: "Mizal",
              PhNum: "0984834985",
              CreatedUserID:"1"
        }
   
        const response = await fetch ('api2/BLBApi/BLB/CoOperativeSetting',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        });
                const cooptive = await response.json();
                console.log(cooptive);
                if(cooptive.STATUS_CODE === "0")
                {
                  setCoperative(cooperative.concat({
                    Logo:cooptive.Logo,
                    CoOperativeCode:formData.CoOperativeCode,
                    CoOperativeName:cooptive.CoOperativeName,
                    Address:cooptive.Address,
                    noOfUser:cooptive.AllowNumOFUser,
                    licenseExipry: cooptive.LicenceExpiry,
                    CreditLimit:cooptive.CreditLimit,
                    ContactNum:cooptive.PhoneNum,
                  }))
                }
           
                // setCoperative(cooperative.concat(cooptive))
     }
    
   const [alert, setAlert] = useState(false);
   const [logoutdata, setLogout] = useState(false);
   const[menutoggle,setMenutoggle]=useState(false);
return (
    <cooperativeContext.Provider value={{addCoperative,menutoggle,setMenutoggle,logoutdata,setLogout,getCoperative,cooperative,setCoperative,cooperativeEdit,setCoperativeEdit,alert,setAlert}}>
      {props.children}
    </cooperativeContext.Provider>
  )

}
export default CooperativeState;
import cooperativeContext from './cooperativeContext'

import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const CooperativeState =(props) =>{
  const [edit, setEdit] = useState(false);
  let navigate = useNavigate();
    const cooperativeInital = []
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
      const getCoperativeInfo = async(cooperativecode)=> {   
        try{
          const response = await fetch(`api2/BLBApi/BLB/GetCoOperativeData?CoOperativeCode=${cooperativecode}`);
          return response.json();
        }  
        catch(err) {
            throw err;
          
        }
        
      }
    
      const addCoperative = async (cooperativedata)=>{
        const formData = {
              CoOperativeCode:cooperativedata.cooperaticecode,
              UserName: cooperativedata.cooperativename,
              NickName: cooperativedata.NickName,
              Logo: cooperativedata.logo,
              ColorCode: cooperativedata.ColorCode,
              IsOnline: cooperativedata.IsOnline,
              IsPaid: cooperativedata.IsPaid,
              LicenceExpiry:cooperativedata.licenseExipry,
              ScopeType: cooperativedata.ScopeType,
              CreditLimit: parseInt(cooperativedata.creditlimit),
              AllowedNumOFUser: parseInt(cooperativedata.noOfUser),
              CbsURL:cooperativedata.CbsURL,
              IsWithdrawAllow: cooperativedata.IsWithdrawAllow,
              ShowHideBalance:cooperativedata.ShowHideBalance,
              AllowMultiDate: cooperativedata.AllowMultiDate,
              PAddress: cooperativedata.address,
              ContactPerson: cooperativedata.ContactPerson,
              PhNum: cooperativedata.contactnumber,
              CreatedUserID:cooperativedata.CreatedUserID
              
        }
   
        console.log(JSON.stringify(formData))
              
              if(edit){
                console.log("here")
                const response = await fetch ('api2/BLBApi/BLB/CoOperativeUpdate',{
                  method:'POST',
                  headers: {'Content-Type': 'application/json'},
                  body:JSON.stringify(formData)
              });
                  const cooptive = await response.json();
                    console.log(cooptive)
                if(cooptive.STATUS_CODE === "0")
                  {
                    let newCooprative = JSON.parse(JSON.stringify(cooperative))
                    // Logic to edit in client
                    for (let index = 0; index < newCooprative.length; index++) {
                      const element = newCooprative[index];
                      if (element.CoOperativeCode === cooperativedata.cooperaticecode) {
                        newCooprative[index].CoOperativeName = cooperativedata.cooperativename;
                        newCooprative[index].Logo = cooperativedata.Logo;
                        newCooprative[index].licenseExipry = cooperativedata.LicenceExpiry; 
                        newCooprative[index].CreditLimit = cooperativedata.CreditLimit;
                        newCooprative[index].NoOfUser = cooperativedata.AllowedNumOFUser;
                        newCooprative[index].PAddress = cooperativedata.PAddress;
                        newCooprative[index].ContactPerson = cooperativedata.ContactPerson;
                        newCooprative[index].PhNum = cooperativedata.PhNum;
                   
                        break; 
                      }
                    }  
                    setCoperative(newCooprative);
                  }
              }
              else{
                console.log("add")
                const response = await fetch ('api2/BLBApi/BLB/CoOperativeAdd',{
                  method:'POST',
                  headers: {'Content-Type': 'application/json'},
                  body:JSON.stringify(formData)
              });
                  const cooptive = await response.json();
                  const Exp  = await cooptive.LicenceExpiry
                  var licenseExp=  await  Exp.split("T").join(' ');
                  
               
                if(cooptive.STATUS_CODE === "0")
                {
                  setCoperative(cooperative.concat({
                    Logo:cooptive.Logo,
                    CoOperativeCode:formData.CoOperativeCode,
                    CoOperativeName:cooptive.CoOperativeName,
                    Address:cooptive.Address,
                    NoOfUser:cooptive.AllowNumOFUser,
                    licenseExipry: licenseExp,
                    CreditLimit:cooptive.CreditLimit,
                    ContactNum:cooptive.PhoneNum,
                  }))
                  navigate("/cooperative")
                }
              }
           
                // setCoperative(cooperative.concat(cooptive))
     }
    
   const [alert, setAlert] = useState({fade:'fade-default'});
   const [logoutdata, setLogout] = useState(false);
   const[menutoggle,setMenutoggle]=useState(false);
   
return (
    <cooperativeContext.Provider value={{getCoperativeInfo,edit, setEdit,addCoperative,menutoggle,setMenutoggle,logoutdata,setLogout,getCoperative,cooperative,setCoperative,cooperativeEdit,setCoperativeEdit,alert,setAlert}}>
      {props.children}
    </cooperativeContext.Provider>
  )

}
export default CooperativeState;
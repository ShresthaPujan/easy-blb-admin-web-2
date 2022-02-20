import cooperativeContext from './cooperativeContext'

import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const CooperativeState =(props) =>{
  const [edit, setEdit] = useState(false);
  const userinfo = JSON.parse(localStorage.getItem('userInfo'))
  const userid= userinfo.UserID;
  

  let navigate = useNavigate();
    const cooperativeInital = []
    const cooperativeEditInitial = {
      logo:"",
      cooperaticecode: "",
      cooperativename:'',
      address:"",
      noOfUser:'',
      licenseExipry: '',
      creditlimit:'',
      UserName: "",
      NickName: "",
      ColorCode: "",
      IsOnline: "",
      IsPaid: "N",
      LicenceExpiry: "",
      ScopeType: "",
      AllowedNumOFUser: "",
      CbsURL: "",
      IsWithdrawAllow: "",
      ShowHideBalance: "",
      AllowMultiDate: "",
      PAddress: "",
      ContactPerson: "",
      PhNum: "",
      CreatedUserID: ""
    }
    const [cooperative, setCoperative] = useState( cooperativeInital);
    const [cooperativeEdit,setCoperativeEdit]= useState(cooperativeEditInitial)

   const getCoperative = async()=> {   
        try{
          setLoading(true)
          const response = await fetch(`api2/BLBApi/BLB/GetCoOperativeList?USerID=${userid}`);
          const jsonData = await response.json();
          setLoading(false)
          setCoperative(jsonData.CopayLst)
                   }
        catch(err) {
            throw err;
          
        }
      }
      const getCoperativeInfo = async(cooperativecode)=> {   
        try{
          setLoading(true)
          const response = await fetch(`api2/BLBApi/BLB/GetCoOperativeData?CoOperativeCode=${cooperativecode}`);
          setLoading(false)
          return response.json();
         
        }  
        catch(err) {
            throw err;
          
        }
        
      }
      const deactivateCooperative = async(coopcode,ispaid) =>{
      
         const formData = {
          CoOperativeCode: coopcode,
          Status: "",
          UpdatedUserID: userid
         }
         if(ispaid === "N"){
           formData.Status = "Y"
         }else{
          formData.Status = "N"
         }
         console.log(formData)
        const response = await fetch ('api2/BLBApi/BLB/StatusUpdates',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        });

        const deactivatecooptive = await response.json();
            console.log(deactivatecooptive)
            if(deactivatecooptive.STATUS_CODE === "0")
              {
                let newCooprative = JSON.parse(JSON.stringify(cooperative))
                // Logic to edit in client
                for (let index = 0; index < newCooprative.length; index++) {
                  const element = newCooprative[index];
                  if (element.CoOperativeCode === coopcode) {
                    newCooprative[index].IsPaid = formData.Status;
                    break; 
                  }
                }  
                setCoperative(newCooprative);
              }
          }
    
      const addCoperative = async (cooperativedata)=>{
        console.log(cooperativedata)

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
                        newCooprative[index].IsPaid = cooperativedata.IsPaid;
                        break; 
                      }
                    }  
                    setCoperative(newCooprative);
                  }
              }
              else{
                const response = await fetch ('api2/BLBApi/BLB/CoOperativeAdd',{
                  method:'POST',
                  headers: {'Content-Type': 'application/json'},
                  body:JSON.stringify(formData)
              });
                  const cooptive = await response.json();
                  console.log(cooptive)
                if(cooptive.STATUS_CODE === "0")
                {
                setMsg({
                  msg:"Cooperative added Successfully",
                  type:"alert alert-success"
                })
                const cooperativeData ={
                    Logo:cooptive.Logo,
                    CoOperativeCode:formData.CoOperativeCode,
                    CoOperativeName:cooptive.CoOperativeName,
                    Address:cooptive.Address,
                    NoOfUser:cooptive.AllowNumOFUser,
                    licenseExpiry: cooptive.LicenceExpiry,
                    CreditLimit:cooptive.CreditLimit,
                    ContactNum:cooptive.PhoneNum,
                     IsOnline: cooptive.IsOnline,
                    IsPaid: cooptive.IsPaid,
                    CBSURL: cooptive.CBSURL
                }
               
                setCoperative(cooperative.concat(cooperativeData))
                setfirst(cooptive)
                  // setCoperative(cooperative.concat({
                  //   Logo:cooptive.Logo,
                  //   CoOperativeCode:formData.CoOperativeCode,
                  //   CoOperativeName:cooptive.CoOperativeName,
                  //   Address:cooptive.Address,
                  //   NoOfUser:cooptive.AllowNumOFUser,
                  //   licenseExipry: cooptive.LicenceExpiry,
                  //   CreditLimit:cooptive.CreditLimit,
                  //   ContactNum:cooptive.PhoneNum,
                  // }))
                  // navigate("/cooperative")
                }
                else{
                  setMsg({
                    msg:"Something Went Wrong",
                    type:"alert alert-danger"

                  })
                }
              }
           
                // setCoperative(cooperative.concat(cooptive))
     }
    const [first, setfirst] = useState({})
   const [alert, setAlert] = useState({fade:'fade-default',msg:'',type:''});
   const [msg, setMsg] = useState({})
   const [logoutdata, setLogout] = useState(false);
   const[menutoggle,setMenutoggle]=useState(false);
   const [loading, setLoading] = useState(false);
   const [resetPassword, setresetPassword] = useState(false)
 
   
return (
    <cooperativeContext.Provider value={{resetPassword,setresetPassword,msg,setMsg,deactivateCooperative,cooperativeEditInitial,first,loading,msg,setMsg,getCoperativeInfo,edit, setEdit,addCoperative,menutoggle,setMenutoggle,logoutdata,setLogout,getCoperative,cooperative,setCoperative,cooperativeEdit,setCoperativeEdit,alert,setAlert}}>
      {props.children}
    </cooperativeContext.Provider>
  )

}
export default CooperativeState;
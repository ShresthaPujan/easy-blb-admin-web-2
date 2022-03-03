import React, { useEffect , useState ,useCallback,useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import '../style.css';
import AddCooperative from './AddCooperative';
import Spinner from '../component/Spinner/Spinner'
import { Alert } from '../component/Alert';
import useEscapse from '../component/hooks/Use-escape';
import AddNewpopup from './AddNewpopup';

export default function Contenttable(props) {

    const context = useContext(cooperativeContext)
    const { check, setCheck, setContactFormvalue,setBasicFormvalue,setlicenseformValue,popup,setPopup,deactivateCooperative,first,edit, loading,setEdit,getCoperative,cooperative,getCoperativeInfo,setCoperativeEdit,cooperativeEdit,setAlert} = context;
    const userId =JSON.parse(localStorage.getItem("userInfo"));
    useEscapse(setPopup);
    function  dateCalculator(licensedate){
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const hour = now.getHours();
        const min = now.getMinutes();
    
        const currentdate = `${month}/${day}/${year}`
        const date1 = new Date(currentdate);
        const date2 = new Date(licensedate);
        var difference=  date2-date1 ;
        const  days = difference/(1000 * 3600 * 24)
        if (days < 0){
            
            return  <td className='expired tc'> License Expired</td>
        }
        else if (days === 0){
            return <td className=' tc'> Expires Today </td>
        }
        else{
            
            return <td className=' tc'>{days} days Remaining</td>
        }
    }
    const handleDeacivate = (coopcode,ispaid) => {
        deactivateCooperative(coopcode,ispaid)
      
    }

    const checkIspaid =(isPaid)=>{
        if(isPaid === "Y"){
            return "Deactivate"
        }
        else{
            return "Activate"
        }
    }
    const handleEdit = (item) =>{
        const coopcode = item;
             setEdit(true);
             
          getCoperativeInfo(item).then(data => {
              var datedummy = data.LicenceExpiry.split(/(\s+)/)[0].split("/")
             if(datedummy[0]<10){
                 datedummy[0] = `0${datedummy[0]}`
             }
             if(datedummy[1]<10){
                 datedummy[1] = `0${datedummy[1]}`
             }
             var date = `${datedummy[2]}-${datedummy[0]}-${datedummy[1]}`
             let setpaid ;
     
             if(data.IsPaid === "Y"){
                 setCheck(true)
             }
             else{
                 setCheck(false)
             }
             console.log(data)
             setContactFormvalue({
                ContactPerson:  data.ContactPerson,
                address:data.Address,
                contactnumber:data.PhoneNum,
             })
             setBasicFormvalue({
                 cooperaticecode:coopcode,
                 cooperativename:data.CoOperativeName,
                 logo:data.Logo,
                 NickName: data.NickName,
                 ColorCode: data.ColorCode,
                 ScopeType: data.ScopeType,
                 CbsURL:data.CbsUrl,
             })
             setlicenseformValue({
                creditlimit:data.CreditLimit,
                 IsOnline: data.IsOnline,
                 noofUser:data.AllowNumOFUser,
                 ShowHideBalance:data.ShowHideBalance,
                 AllowMultiDate: data.MultiDate,
                 IsWithdrawAllow: data.IsAllowWithDraw,
                 licenseExipry:date,
                 IsPaid:data.IsPaid,
             })
           });
             setPopup(true);
     }
     const openInNewTab = (url) => {
         const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
         if (newWindow) newWindow.opener = null
       }
    
    if(props.data.length > 0 ) {
  return (
    <div className="outer-wrapper">
    <div className="table-wrapper"  style={{overflowX:"auto"}}>
    <table className="table table-striped">
    
        <thead>
            <tr className='tableHead'>
                <td>S.N.</td>
                <td className='tc'>Logo</td>
                <td >Co Operative Code</td>
                <td className="tl">Co Operative Name</td>
                <td className='tl'>Address</td>
                <td className='tc'> No of User</td>
                <td className='tc'>Exipry Date</td>
                <td> Credit Limit</td>                                                             
                <td className='tl'>Contact</td>   
                <td className='tc' style={{ width: "220px"}}> Action</td>
            </tr>
        </thead>
        <tbody>
       


    {props.data.map((item,i) => 

    <tr key={i+1}>
                    <td className='tc'>{i + 1}</td>
                    <td className="contentLogo tc"><div className="coopImg text-center"><img src={item.Logo}  alt="" /></div></td>
                    <td className='tc'>{item.CoOperativeCode}</td>
                    <td  className="tl">{item.CoOperativeName}</td>                       
                    <td className='tl'>{item.Address}</td>
                    <td className='tc'> {item.NoOfUser}</td>
                    {item.licenseExpiry?dateCalculator(item.licenseExpiry.split("T")[0]):<td></td>}
                    <td className='tc'> {item.CreditLimit}</td>                                                                   
                    <td className='tl'>{item.ContactNum}</td>
                    <td className='tc'>
                        <span className='editspan badge'  onClick={()=>handleEdit(item.CoOperativeCode)}>Edit</span>
                     | <span><button className='deletespan badge' style={{border:"none"}} onClick={()=>handleDeacivate(item.CoOperativeCode,item.IsPaid)}>{checkIspaid(item.IsPaid)}</button></span> |
                     <span onClick={() => openInNewTab(item.CBSURL)} className='editspan badge'>CBS Url</span></td>                                                               

        </tr>
   )}                               
        </tbody>
        
        </table>
        </div>
        </div>
  )
    }
    else{
        return <div className='text-center'>No Data Found</div>
    }
}

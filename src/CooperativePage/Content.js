import React, { useEffect , useState ,useCallback,useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import '../style.css';
import AddCooperative from './AddCooperative';
import Spinner from '../component/Spinner/Spinner'
import { Alert } from '../component/Alert';
import useEscapse from '../component/hooks/Use-escape';
import AddNewpopup from './AddNewpopup';



export default function Content() {

    const [searchTerm,setSearchTerm] = useState("");
    const context = useContext(cooperativeContext)
    const {popup,setPopup,deactivateCooperative,first,edit, loading,setEdit,getCoperative,cooperative,getCoperativeInfo,setCoperativeEdit,cooperativeEdit,setAlert} = context;
    const [check, setCheck] = useState(false)
   
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
  useEffect(() => {
    getCoperative()
    
  }, []);

  const handleAddCooperative= (e) =>{
      console.log("here")
      console.log(popup)
    e.preventDefault();
    setEdit(false);
    setPopup(true);
    console.log(popup)

}

const handleSearch = (e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    
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
        
        setCoperativeEdit({  logo:data.Logo,
            cooperaticecode: item,
            cooperativename:data.CoOperativeName,
            address:data.Address,
            noOfUser:data.AllowNumOFUser,
            licenseExipry:date,
            creditlimit:data.CreditLimit,
            contactnumber:data.PhoneNum,
            NickName: data.NickName,
            ColorCode: data.ColorCode,
            IsOnline: data.IsOnline,
            IsPaid:setpaid,
            ScopeType: data.ScopeType,
            CbsURL:data.CbsUrl,
            IsWithdrawAllow: data.IsAllowWithDraw,
            ShowHideBalance:data.ShowHideBalance,
            AllowMultiDate: data.MultiDate,
            ContactPerson:   data.ContactPerson,
            CreatedUserID:  userId.UserID,})
      });
        setPopup(true);
}
const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return <>
                 <div className="col-lg-12 col-md-12 col-sm-12 contentMainSection">
                            <div>
                                  <div className="fontHeader">Cooperative List</div>              
                                                    <hr style={{color:"#f1f2f3"}}/>
                                                </div>
                           <section className="content-section main-content">
                                <div className="content">
                                        <div className=" col-lg-12 col-sm-12">
                                              
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-6 col-sm-6 p-2 px-3 Search">
                                                        <input type="text" placeholder="Search" onChange={handleSearch}  />
                                                        <i className="fas fa-search"></i>
                                                    </div>
                                                   
                                                    <div className="col-lg-6 offset-lg-4 offset-md-0 offset-sm-0 col-md-6 col-sm-6 text-end p-2 px-3">                                 
                                                                       <button className="btn btn-cmpy btn-sm"   onClick={handleAddCooperative}> Add Cooperative +</button>
                                                         </div>
                                                   
                                                </div>
                                                </div>
                                                { <div className="row">
                                                    <div className="">
                                                    <div className="col-lg-12 p-1">
                                                    {loading ? <Spinner/> :(
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
                                                       
 
                                                   {cooperative.filter((item)=>{
                                                        if (searchTerm === ""){
                                                            return item
                                                        } else if(item.CoOperativeName.toLowerCase().includes(searchTerm.toLowerCase())||
                                                                     item.CoOperativeCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                                     item.Address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                                     item.ContactNum.toLowerCase().includes(searchTerm.toLowerCase()) ){
                                                            return item
                                                        }
                                                    }).map((item,i) => 
                                                    
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
                                                        )}
                                                    </div>
                                                    </div>
                                                    
                                                </div> }
                                            
                                        
                                </div>
                            </section>
         </div>
         
        
         {edit ? (
         <AddCooperative trigger ={popup} setTrigger={setPopup} setCheckTrigger={setCheck} check={check}>
             <h5 >Edit Cooperative</h5>
             <hr/>
         </AddCooperative>):
         (
         <AddCooperative trigger ={false} setTrigger={setPopup} setCheckTrigger={setCheck} check={check}>
             <h5>Add Cooperative</h5>
         </AddCooperative>)
         }
        <AddNewpopup  trigger ={popup} setTriggernew={setPopup} />

  </>;
}

import React, { useEffect , useState ,useCallback,useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import '../style.css';
import AddCooperative from './AddCooperative';
import Spinner from '../component/Spinner/Spinner'
import { Alert } from '../component/Alert';
import useEscapse from '../component/hooks/Use-escape';



export default function Content() {

    const [popup, setPopup] = useState(false);
    const [searchTerm,setSearchTerm] = useState("");
    const context = useContext(cooperativeContext)
    const {deactivateCooperative,first,edit, loading,setEdit,getCoperative,cooperative,getCoperativeInfo,setCoperativeEdit,cooperativeEdit,setAlert} = context;

   
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
    e.preventDefault();
    setEdit(false);
    setPopup(true);

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
            IsPaid:data.IsPaid,
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
  console.log(cooperative)
  return <>
   <div className="col-lg-12 col-md-12 col-sm-12">
                     <section className="content-section contentmain-popup">
                                             
                     </section>
                           <section className="content-section main-content">
                                <div className="content">
                                        <div className=" col-lg-12 col-sm-12">
                                                <div className="row first_content">
                                                    <div className="col-lg-6 p-2">
                                                        <h5>Cooperative List</h5>
                                                    </div>
                                                    <div className="col-lg-6 p-2 text-end">
                                                            <button className="btn btn-cmpy"   onClick={handleAddCooperative}> Add Cooperative +</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-4 col-sm-3 p-2 Search">
                                                        <input type="text" placeholder="Search" onChange={handleSearch}  />
                                                        <i className="fas fa-search"></i>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6  col-sm-6 p-2 text-end">
                                                            <div className="row">
                                                                <div className=" offset-lg-6 offset-md-6  offset-sm-0 col-lg-6  col-md-6 col-sm-12">
                                                                    <div className="row">
                                                                            <div className="col-lg-6 col-md-6  col-sm-6   ">
                                                                             
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                            
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                                </div>
                                                { <div className="row">
                                                    <div className="ramram">
                                                    <div className="col-lg-12 ">
                                                    {loading && (<Spinner/>)}
                                                    <div className="outer-wrapper">
                                                    <div className="table-wrapper">
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
                                                                <td className='tc'> Is Paid</td>
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
                                                                    <td className="contentLogo tc"><img src={item.Logo}  alt="" /></td>
                                                                    <td className='tc'>{item.CoOperativeCode}</td>
                                                                    <td  className="tl">{item.CoOperativeName}</td>                       
                                                                    <td className='tl'>{item.Address}</td>
                                                                    <td className='tc'> {item.NoOfUser}</td>
                                                                    {item.licenseExpiry?dateCalculator(item.licenseExpiry.split("T")[0]):<td></td>}
                                                                    <td className='tc'> {item.CreditLimit}</td>
                                                                    <td className='tc'> {item.IsPaid}</td>
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
                                                    </div>
                                                    </div>
                                                </div> }
                                            
                                        
                                </div>
                            </section>
         </div>
         
        
         {edit ? (
         <AddCooperative trigger ={popup} setTrigger={setPopup} >
             <h5 >Edit Cooperative</h5>
             <hr/>
         </AddCooperative>):
         (
         <AddCooperative trigger ={popup} setTrigger={setPopup} >
             <h5>Add Cooperative</h5>
         </AddCooperative>)
         }
        

  </>;
}

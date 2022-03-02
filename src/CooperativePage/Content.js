import React, { useEffect , useState ,useCallback,useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import '../style.css';
import AddCooperative from './AddCooperative';
import Spinner from '../component/Spinner/Spinner'
import { Alert } from '../component/Alert';
import useEscapse from '../component/hooks/Use-escape';
import AddNewpopup from './AddNewpopup';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import Contenttable from './Contenttable';



export default function Content() {

    const [searchTerm,setSearchTerm] = useState("");
    const context = useContext(cooperativeContext)
    const { check, setCheck, setContactFormvalue,setBasicFormvalue,setlicenseformValue,popup,setPopup,deactivateCooperative,first,edit, loading,setEdit,getCoperative,cooperative,getCoperativeInfo,setCoperativeEdit,cooperativeEdit,setAlert} = context;
    const [searchresult, setSearchresult] = useState([]);
   
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
    setSearchTerm("");
    setPopup(true);
    console.log(popup)

}

const handleSearch = (e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    if(searchTerm !== ""){
        const searchresultdata = cooperative.filter((item)=>{
            return Object.values(item).join(" ").toLowerCase().includes(searchTerm.toLowerCase());

        })
        setSearchresult(searchresultdata)
    }else{
        setSearchresult(cooperative);
    }
    
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
            noOfUser:data.AllowNumOFUser,
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
                                                        <input type="text" placeholder="Search" onChange={handleSearch}  value={searchTerm}/>
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
                                                   <Contenttable data={(searchTerm.length < 1 ? cooperative : searchresult)}/>
                                                        )}
                                                    </div>
                                                    </div>
                                                    
                                                </div> }
                                            
                                        
                                </div>
                            </section>
         </div>
         
        
         {edit ? (
         <AddCooperative trigger ={false} setTrigger={setPopup} setCheckTrigger={setCheck} check={check}>
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

import Sidebarone from './Sidebarone';
import React, { useEffect , useState ,useRef} from 'react'
import { Routes, Route, Link, useNavigate, useSearchParams } from "react-router-dom";
import Login from './Login';
import '../style.css';
import { logout} from '../features/Userslice';
import Footer from './Footer';
import AddCooperative from './AddCooperative';
import Spinner from './Spinner/Spinner'
import Contenttable from './Pages/Contenttable';

export default function Content() {
 
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [handleedit, setHandleEdit] = useState({
        logo:"",
        cooperaticecode: "",
        cooperativename:'',
        address:"",
        noOfUser:'',
        licenseExipry: '',
        creditlimit:'',
        contactnumber:'',
    });
    useEffect(() => {
        fetchFunction()
    },[] );
    async function fetchFunction() {
        setLoading(true)
        try{
          const response = await fetch(`api1/gharelukam/Getcoperative`);
          const jsonData = await response.json();
          setData(jsonData)
         setLoading(false)
                   }
        catch(err) {
            setLoading(false)
            throw err;
          
        }
      }
const handleAddCooperative= (e) =>{
        e.preventDefault();
        setPopup(true);

}
    const ref = useRef(null);

const handleEdit = (item) =>{
    setEdit(true)
    const dataaa = {
        logo:(item.Logo? item.logo:'Add a Logo'),
        cooperaticecode: item.CoOperativeCode,
        cooperativename:item.CoOperativeName,
        address:item.Address,
        noOfUser:item.NoOfUser,
        licenseExipry: (item.licenseExpiry?item.licenseExipry:'Add license Exipry'),
        creditlimit:item.CreditLimit,
        contactnumber:(item.ContactNum?item.contactnumber:'Add contact number'),
    };
    setHandleEdit(dataaa)
    setPopup(true);
 }


  return <>
                
         <div className="col-lg-12">
                     <section className="content-section contentmain-popup">
                                                <div className="col-lg-12 sub_menu">
                                                        Company |DashBoard
                                                </div>
                     </section>
                           <section className="content-section">
                                <div className="content">
                                        <div className=" col-lg-12 col-sm-12">
                                                <div className="row first_content">
                                                    <div className="col-lg-6 p-2">
                                                        <h4>Company List</h4>
                                                    </div>
                                                    <div className="col-lg-6 p-2 text-end">
                                                            <button className="btn btn-primary"  ref={ref} onClick={handleAddCooperative}> Add Cooperative +</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 p-2 Search">
                                                        <input type="text" placeholder="Search" id=""/>
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

                                                <div className="row">
                                                    <div className="col-lg-12 table-responsive">
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
                                                                <td className='tl'>Contact</td>   
                                                                <td> Action</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
           
                                                   {data.map((item,i) => 
                                                      
                                                    <tr key={i+1}>
                                                      {console.log(item)}
                                                <td className='tc'>{i + 1}</td>
                                                <td className="contentLogo tc"><img src={item.Logo}  alt="" /></td>
                                                <td className='tc'>{item.CoOperativeCode}</td>
                                                <td >{item.CoOperativeName}</td>                       
                                                <td >{item.Address}</td>
                                                <td> {item.NoOfUser}</td>
                                                <td> {item.licenseExpiry}</td>
                                                <td className='tc'> {item.CreditLimit}</td>
                                                <td>{item.ContactNum}</td>
                                                
                                                <td><span className='editspan badge'  onClick={()=>handleEdit(item)}>Edit</span> | <span className='deletespan badge '>Deactivate</span></td>                                                               
  
                                                        </tr>
                                          
                                                   )}                               
                                                        </tbody>
                                                        
                                                        </table>
                                                        </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            
                                        </div>
                                </div>
                            </section>
         </div>
         {edit? (
         <AddCooperative trigger ={popup} setTrigger={setPopup} item={handleedit} eitem = {setHandleEdit}>
             <h4 >Add Cooperative</h4>
         </AddCooperative>):
         (
         <AddCooperative trigger ={popup} setTrigger={setPopup} item={handleedit}>
             <h4 >Add Cooperative</h4>
         </AddCooperative>)
         }
        
   
  </>;
}

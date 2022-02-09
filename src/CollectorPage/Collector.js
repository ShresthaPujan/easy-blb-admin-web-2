import React, { useEffect , useCallback, useState ,useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext'
import '../style.css';
import AddCooperative from './AddCollector';
import Spinner from '../component/Spinner/Spinner'
import { Alert } from '../component/Alert';
import collectorContext from '../component/Collector/collectorContext';
import AddCollector from './AddCollector';
import EditCollector from './EditCollector';
import Escpdetect from '../component/Escpdetect';


export default function Collector() {

    const [popup, setPopup] = useState(false);
    const [editpopup, setEditPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [searchTerm,setSearchTerm] = useState("");
    const context = useContext(collectorContext)
    const {getCollector,collector,collectorEdit,setCollectorEdit,setEdit} = context;
    

 
  useEffect(() => { 
    getCollector()  
  }, []);
 

  const handleAddCollector= (e) =>{
    e.preventDefault();
    setEdit(false);
    setPopup(true);

}

const handleSearch = (e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    
}
const handleEdit = (e) =>{
        e.preventDefault();
        setEditPopup(true)
}
const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
        setPopup(false);
       
    }
    
  }, []);

useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  
  return <>
   <div className="col-lg-12 col-md-12 col-sm-12">
                     <section className="content-section contentmain-popup">
                                                <div className="col-lg-12 sub_menu p-3">
                                                        Company |DashBoard
                                                </div>
                     </section>
                           <section className="content-section main-content">
                                <div className="content">
                                        <div className=" col-lg-12 col-sm-12">
                                                <div className="row first_content">
                                                    <div className="col-lg-6 p-2">
                                                        <h5>Company List</h5>
                                                    </div>
                                                    <div className="col-lg-6 p-2 text-end">
                                                            <button className="btn btn-primary"   onClick={handleAddCollector}> Add Collector +</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-4 col-sm-3 p-2 Search">
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
                                                    <div className="outer-wrapper" style={{maxWidth:"100%"}}>
                                                    <div className="table-wrapper">
                                                    <table className="table table-striped">
                                                    
                                                        <thead>
                                                            <tr className='tableHead'>
                                                                <td>S.N.</td>
                                                                <td className='tc'>Branch ID</td>
                                                                <td >Collector ID</td>
                                                                <td className="tl">Username</td>
                                                                <td className='tl'>Fullname</td>
                                                                <td className='tc'> Is Active</td>
                                                                <td className='tc' style={{ width: "297px"}}> Action</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
           
                                                   { collector.map((item,i) => 
                                                      
                                                    <tr key={i+1}>
                                                                    <td className='tc'>{i + 1}</td>
                                                                    <td className="tc">{item.BranchID} </td>
                                                                    <td className='tc'>{item.CollectorID}</td>
                                                                    <td  className="tl">{item.UserName}</td>                       
                                                                    <td className='tl'>{item.fullName}</td>
                                                                    <td className='tl'>{item.IsActive}</td>
                                                                    <td className='tc'><span className='editspan badge'  onClick={handleEdit}>Edit</span> | <span className='deletespan badge '>Deactivate</span> | <span className='editspan badge'  onClick={handleEdit}>Reset Password</span></td>                                                               
  
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
         
        
   
         <AddCollector triggerc ={popup} setTriggerc={setPopup} >
             <h4 >Add Collector</h4>
         </AddCollector>
        <EditCollector etrigger ={editpopup} setEtrigger={setEditPopup}>
        <h4 >Edit Collector</h4>
     </EditCollector>        

  </>;
}

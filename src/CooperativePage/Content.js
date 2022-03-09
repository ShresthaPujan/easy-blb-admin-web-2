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
    const { check, setCheck, setContactFormvalue,setBasicFormvalue,setlicenseformValue,popup,setPopup,deactivateCooperative,first,edit, loading,setEdit,getCoperative,cooperative,getCoperativeInfo,setCoperativeEdit,cooperativeEdit} = context;
    const [searchresult, setSearchresult] = useState([]);
   
    const userId =JSON.parse(localStorage.getItem("userInfo"));
       useEscapse(setPopup);


      
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
         
        
        <AddNewpopup  trigger ={popup} setTriggernew={setPopup} />

  </>;
}

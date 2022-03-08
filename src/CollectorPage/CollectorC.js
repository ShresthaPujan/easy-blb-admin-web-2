import React, {
  useEffect,
  useCallback,
  Component,
  useState,
  useContext,
} from "react";
import cooperativeContext from "../component/Cooperative/cooperativeContext";
import "../style.css";
import AddCooperative from "./AddCollector";
import Spinner from "../component/Spinner/Spinner";
import { Alert } from "../component/Alert";
import collectorContext from "../component/Collector/collectorContext";
import EditCollector from "./EditCollector";
import useEscapse from "../component/hooks/Use-escape";
import Select, { NonceProvider } from "react-select";
import Collectortable from "./Collectortable";

export default function CollectorC() {
  const [popup, setPopup] = useState(false);
  const [editpopup, setEditPopup] = useState(false);

  const [searchTerm,setSearchTerm] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const context = useContext(collectorContext);
  const contextCooperative = useContext(cooperativeContext);
  const { resetPassword, cooperative, setAlert, alert } = contextCooperative;
  const {
    resetpassword,
    deactivateCollector,
    loading,
    getCollectorInfo,
    getCollector,
    collector,
    collectorEdit,
    setCollectorEdit,
    setEdit,
  } = context;
  const handleAddCollector = (e) => {
    e.preventDefault();
    setEdit(false);
    setPopup(true);
  };

  const handleSearch = (e)=>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    if(searchTerm !== ""){
        const searchresultdata = collector.filter((item)=>{
            return Object.values(item).join(" ").toLowerCase().includes(searchTerm.toLowerCase());

        })
        setSearchresult(searchresultdata)
    }else{
        setSearchresult(collector);
    }  
}
 
  return (
    <>
   
      <div className="col-lg-12 col-md-12 col-sm-12 pb-0 pl-3 pr-3 pt-0" style={{borderBottom:"1px solid #f5f8fa"}}>
        <div className="row popUptab">
          <div className="col-lg-3 col-md-4 col-sm-3  Search searchPopup">
            <input type="text" placeholder="Search" onChange={handleSearch} />
            <i className="fas fa-search"></i>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <section
          className="content-section main-content p-3"
          style={{ border: "0"  }}
        >
         
            {
              <div className="row ">
                <div className="col-lg-12 p-0">
              <Collectortable  data={(searchTerm.length < 1 ? collector : searchresult)}/>
                 
                </div>
              </div>
            }
         
        </section>
      </div>

      
      <EditCollector etrigger={editpopup} setEtrigger={setEditPopup}>
        <h4>Edit Collector</h4>
      </EditCollector>
    </>
  );
}

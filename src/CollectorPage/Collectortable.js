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
  import AddCollector from "./AddCollector";
  import EditCollector from "./EditCollector";
  import useEscapse from "../component/hooks/Use-escape";
  import Select, { NonceProvider } from "react-select";

export default function Collectortable(props) {
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
  
    const handleEdit = (item) => {
        getCollectorInfo(item).then((data) => {
          const collData = {
            CoOperativeCode: "YT47",
            FullName: data.FullName,
            branchID: data.branchID,
            UserName: data.UserName,
            CollectorID: data.CollectorID,
            TAddress: data.collTempAddress,
            PAddress: data.collPermAddress,
            PhNum: data.collPhone,
            Email: data.collMail,
            FatherName: data.collFather,
            Guarantee: data.collGuaranteel,
            EmergencyContact: data.collEmergencyContact,
            activateInactivate: data.activateInactivate,
            NameNepali: data.nameNepali,
            IsAllowSignature:data.IsAllowSignature
          };
          setCollectorEdit(collData);
        });
        setEditPopup(true);
      };
    useEffect(() => {
      getCollector();
    }, []);
  
    useEscapse(setPopup);
  

  
  
    const coopCodeGet = (value) => {
      getCollector(value.value);
      cooperativeInfo(value.value);
    };
    const [infoCoop, setinfoCoop] = useState({});
  
    const cooperativeInfo = (value = "YT47") => {
      let newCoopCOde = JSON.parse(JSON.stringify(cooperative));
      var infoArray = [];
      for (var index = 0; index < newCoopCOde.length; index++) {
        if (newCoopCOde[index].CoOperativeCode === value) {
          setinfoCoop({
            CoOperativeName: newCoopCOde[index].CoOperativeName,
            licenseExpiry: newCoopCOde[index].licenseExpiry,
            Address: newCoopCOde[index].Address,
          });
        }
      }
    };
    const handleDeacivate = (collId, IsActive) => {
      deactivateCollector(collId, IsActive);
    };
    const checkIspaid = (isPaid) => {
      if (isPaid === "Active") {
        return "Deactivate";
      } else {
        return "Activate";
      }
    };
    const [username, setUsername] = useState();
    
    const handleResetPassword = (username) => {
      setAlert({
        fade: "fade-in",
        msg: "Do you want to Reset Password ?",
        type: "reset",
      });
      setUsername(username);
    };
    useEffect(() => {
      if (resetPassword) {
        resetpassword(username);
        setUsername();
        setAlert({ fade: "fade-default", msg: "", type: "" });
      }
    }, [resetPassword]);
  
    const [ncooperativecode, setCoperativeCode] = useState([]);
    useEffect(() => {
      let newCoopCOde = JSON.parse(JSON.stringify(cooperative));
      var options = [];
      for (var index = 0; index < newCoopCOde.length; index++) {
        var ojj = {
          value: newCoopCOde[index].CoOperativeCode,
          label: newCoopCOde[index].CoOperativeCode,
        };
        options.push(ojj);
      }
      cooperativeInfo();
      setCoperativeCode(options);
  
      coopCodeGet("YT47");
    }, []);
if(props.data.length > 0 ) {
  return (
    <div
    className="outer-wrapper"
    style={{
      height: "100%",
      maxHeight: "290px",
      overflow: "auto",
      margin:"0 !important",
      maxWidth:"100%"
    }}
  >
    <div
      className="table-wrapper insidePopUptable"
      style={{ overflowX: "auto", overflowY: "hidden" }}
    >
        {loading ? <Spinner/> :(
      <table className="table table-striped">
        <thead>
          <tr className="tableHead">
            <td>S.N.</td>

            <td className="tl">Username</td>
            <td className="tl" style={{ width: "150px" }}>
              Fullname
            </td>
            <td className="tc"> Is Active</td>
            <td className="tc" style={{ width: "250px" }}>
              {" "}
              Action
            </td>
          </tr>
        </thead>
      
        <tbody>
          {props.data
              .map((item, i) => (
                <tr key={i + 1}>
                  <td className="tc">{i + 1}</td>

                  <td className="tl">{item.UserName}</td>
                  <td className="tl">{item.fullName}</td>
                  <td className="tc">{item.IsActive}</td>
                  <td className="tc">
                    <span
                      className="deletespan badge deactivate"
                      onClick={() =>
                        handleDeacivate(
                          item.CollectorID,
                          item.IsActive
                        )
                      }
                    >
                      {checkIspaid(item.IsActive)}
                    </span>{" "}
                    |{" "}
                    <span
                      className="editspan badge"
                      onClick={() =>
                        handleResetPassword(item.UserName)
                      }
                    >
                      Reset Password
                    </span>
                  </td>
                </tr>
              
          ))}
        </tbody>
       
      </table>
       )}
    </div>
  </div>
  )
}
else{
    return <div className='text-center'>No Data Found</div>
}
}

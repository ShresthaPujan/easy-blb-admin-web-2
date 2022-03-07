import React,{useState,useEffect,useContext} from "react";
import Select from 'react-select'
import cooperativeContext from "./Cooperative/cooperativeContext";
import collectorContext from "./Collector/collectorContext";
import notificationContext from "./Notification/Notificationcontext";
import Spinner from "./Spinner/Spinner"
export default function Notification() {
    const context = useContext(collectorContext)
    const contextCooperative = useContext(cooperativeContext)
    const {cooperative,getCoperative}=contextCooperative;
    const {setCooperativeCode,getCollector,setCollector,getCollectorData,collector} = context;
    const{postNotification,notificationList}=useContext(notificationContext)
    const [chooseOption, setChooseOption] = useState("Cooperative");
    const [ncooperativecode, setCoperativeCode] = useState([])
    const [ncollectors, setNcollectors] = useState([])
    const[coopCode,setCoopCOde] = useState()
    const[collectorCode,setCollectorCOde] = useState()
    const [loading, setLoading] = useState(false)
    const [first, setfirst] = useState([])
    
    const [collectorSelectvalue, setcollectorSelectvalue] = useState()
    const [cooperativeSelectvalue, setcooperativeSelectvalue] = useState()



    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setChooseOption(value);
 
      };

      const coopCodeGet = async(value) =>{ 
        setcooperativeSelectvalue(value)
              setLoading(true)
              setCoopCOde(value.value)
              console.log(value)
              console.log(collectorSelectvalue)
             postNotification()

             await  getCollectorData(value.value).then(data => {
               if(data.STATUS_CODE === "0"){
                setNcollectors(data.lstCollector)
            
              
               } else{
               
                setNcollectors([{
                  fullName:"No data",
                  CollectorID:"1"
                }])
      
               }
              

              })
    }
    const collecetorCodeGet = (value) =>{
      setcollectorSelectvalue(value)
      var collcode = value.value
      postNotification(collcode,coopCode)

    }
    const fetchcollector = async()=>{
      setLoading(true)
      let newCollectorCode= JSON.parse(JSON.stringify(ncollectors))
      var collectorOptions = [];
      for (var index = 0; index < newCollectorCode.length; index++){
          var ojjCollector ={
            value:newCollectorCode[index].CollectorID,
            label:newCollectorCode[index].fullName
          }  
          collectorOptions.push(ojjCollector)
           }
            setCollectorCOde(collectorOptions)
            setcollectorSelectvalue(collectorOptions[0])

           setLoading(false)
      
        
    }
   
  useEffect(() => {
    fetchcollector()
  }, [ncollectors])
  

    const fetch = async() =>{
      setLoading(true)
      let newCoopCOde= await JSON.parse(JSON.stringify(cooperative))  
      var options =[];
      for (var index = 0; index < newCoopCOde.length; index++){
        var ojj ={
          value:newCoopCOde[index].CoOperativeCode,
          label:newCoopCOde[index].CoOperativeCode
        }  
        options.push(ojj) 
      }
      if(options.length > 0 ){
      setCoperativeCode(options)
      setcooperativeSelectvalue(options[0])
      setLoading(false)
      }
    }
useEffect(() => {
  fetch()
  fetchcollector()
  coopCodeGet({value:"YT47"})
  postNotification("YT47","2")

}, [])
      

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 contentMainSection">
      <div>
        <div className="fontHeader">Notification</div>
        <hr style={{ color: "#f1f2f3" }} />
      </div>
      <section className="content-section main-content">
        <div className="content">
          
          <div className=" col-lg-12 col-sm-12">
            <div className="row">
              <div className="col-lg-4 position-relative">
                <select
                  style={{ fontSize: "11px" }}
                  name="snotifiaction"
                  value={chooseOption}
                  onChange={handleChange}
                  className="form-control form-control-sm mb-1"
                >
                  <option  selected style={{ fontSize: "11px" }}>
                    select Option
                  </option>
                  <option value="Cooperative">Cooperative</option>
                  <option value="Collector">Collector</option>
                </select>
                <i class="fas fa-angle-down  notificationpositondrop"></i>{" "}
              </div>
             
              {chooseOption === "Cooperative" &&(
                  <div className="col-lg-4 col-md-4 col-sm-4  Search">
                        <Select  className="selectT"     options={ncooperativecode}  onChange={coopCodeGet}
                          defaultValue={ncooperativecode[0]}
                        />   </div>)}
                        {chooseOption === "Collector" &&(
                        <>
                    <div className="col-lg-4 col-md-4 col-sm-4  Search">
                        <Select  className="selectT"     options={ncooperativecode}   onChange={coopCodeGet}
                            value={cooperativeSelectvalue}
                      />   
                      </div>
                    
                      <div className="col-lg-4 col-md-4 col-sm-4  Search">
                        <Select  className="selectT"     options={collectorCode}  onChange={collecetorCodeGet}
                          value={collectorSelectvalue}
                        />   
                      </div>
                        </>)}
                        {loading ? <Spinner/> :(  
                        <div className="outer-wrapper" style={{maxWidth:"100%", overflowX:"auto"}}>
                      <div className="table-wrapper" style={{ overflowX:"auto"}}>
                      <table className="table table-striped">
                                                    
                                                    <thead>
                                                        <tr className='tableHead' >
                                                            <td className="tc" style={{width:"10px"}}>S.N.</td>
                                                            <td className="tc">NotiHead</td>
                                                            <td className='tc' style={{ position: "static",width:"150px"}}>NotiBody</td>
                                                             <td className='tc' style={{ position: "static",width:"95px"}}>Nepalidate</td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                      
                                                          {chooseOption === "Collector" && notificationList.length > 0 ? notificationList.map((item,i) => 
                                                     
                                                          <tr key={i+1}>                                                                 
                                                            <td className="tc"  style={{width:"10px"}}>{i + 1}</td>
                                                            <td className="tc"  >{item.NotiHead}</td>
                                                            <td className="tc"   style={{ position: "static",width:"150px"}}>{item.NotiBody}</td>
                                                            <td className="tc"  style={{ position: "static",width:"95px"}}>{item.Nepalidate}</td>
                                                          </tr>
                                                          ):<tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td>No data found</td>
                                                            <td></td>
                                                          </tr>}
                                                        </tbody> 
                                                        </table>
               
               </div>
               </div>
                  )}
            </div>
          </div>
       
        </div>
      </section>
    </div>
  );
}

import React,{useState,useEffect,useContext} from "react";
import Select from 'react-select'
import cooperativeContext from "./Cooperative/cooperativeContext";
import collectorContext from "./Collector/collectorContext";
export default function Notification() {
    const context = useContext(collectorContext)
    const contextCooperative = useContext(cooperativeContext)
    const {cooperative}=contextCooperative;
    const {setCooperativeCode,getCollector,collector} = context;
    const [chooseOption, setChooseOption] = useState("Cooperative");

    const [ncooperativecode, setCoperativeCode] = useState([])
    const [ncollectors, setNcollectors] = useState([])
    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setChooseOption(value);
        console.log(value)
      };

      const coopCodeGet =(value) =>{ 
            getCollector(value.value)
            console.log(value)
            
    }
    useEffect(() => {
        console.log(collector)
        let newCollectorCode= JSON.parse(JSON.stringify(collector))
        var collectorOptions = [];
        for (var index = 0; index < newCollectorCode.length; index++){
            var ojjCollector ={
              value:newCollectorCode[index].CollectorID,
              label:newCollectorCode[index].fullName
            }  
            collectorOptions.push(ojjCollector)
             }
             setNcollectors(collectorOptions)
    }, [collector])
    

useEffect(() => {
    
    let newCoopCOde= JSON.parse(JSON.stringify(cooperative))  
    var options =[];
    for (var index = 0; index < newCoopCOde.length; index++){
      var ojj ={
        value:newCoopCOde[index].CoOperativeCode,
        label:newCoopCOde[index].CoOperativeCode
      }  
      options.push(ojj) 
    }
    setCoperativeCode(options)
    coopCodeGet("YT47")
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
              {chooseOption === "Cooperative" ?(
                  <div className="col-lg-4 col-md-4 col-sm-4  Search">
               <Select  className="selectT"     options={ncooperativecode}  onChange={coopCodeGet}
              />   </div>):
              (<>
           <div className="col-lg-4 col-md-4 col-sm-4  Search">
               <Select  className="selectT"     options={ncooperativecode}  onChange={coopCodeGet}
             />   
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4  Search">
               <Select  className="selectT"     options={ncollectors} 
              />   
            </div>
            
              </>

              )}


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

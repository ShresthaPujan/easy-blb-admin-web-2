import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import cooperativeContext from "../Cooperative/cooperativeContext";
import collectorContext from "../Collector/collectorContext";
import notificationContext from "../Notification/Notificationcontext";
import Spinner from "../Spinner/Spinner";
import Notificationpopup from "./Notificationpopup";
import Transdate from "../../Transdate";
export default function Notification() {
  const context = useContext(collectorContext);
  const contextCooperative = useContext(cooperativeContext);
  const { cooperative, getCoperative } = contextCooperative;
  const {
    setCooperativeCode,
    getCollector,
    setCollector,
    getCollectorData,
    collector,
  } = context;

  const {
    notificationPopup,
    setnotificationPopup,
    loading,
    setLoading,
    postNotification,
    notificationList,
    collectorpnotificationcode,
    setcollectornotificationcode, coopid,setcoopid,
  } = useContext(notificationContext);
  const [chooseOption, setChooseOption] = useState("Cooperative");
  const [ncooperativecode, setCoperativeCode] = useState([]);
  const [ncollectors, setNcollectors] = useState([]);
  const [coopCode, setCoopCOde] = useState();
  const [collectorCode, setCollectorCOde] = useState();

  const [collectorSelectvalue, setcollectorSelectvalue] = useState();
  const [cooperativeSelectvalue, setcooperativeSelectvalue] = useState();

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setChooseOption(value);
  };
  const coopCodeGet = async (value) => {
    var id = value.value;
    setcooperativeSelectvalue(value);
    setLoading(true);
    setcoopid(id)
    setCoopCOde(value.value);
    postNotification();

    await getCollectorData(value.value).then((data) => {
      if (data.STATUS_CODE === "0") {
        setNcollectors(data.lstCollector);
      } else {
        setNcollectors([
          {
            fullName: "No data",
            CollectorID: "1",
          },
        ]);
      }
    });
  };
  const collecetorCodeGet = (value) => {
    console.log(value)
    setcollectorSelectvalue(value);
    setcollectornotificationcode(value.value)
    var collcode = value.value;
    postNotification(collcode, coopCode);
  };
  const fetchcollector = async () => {
    setLoading(true);
    let newCollectorCode = JSON.parse(JSON.stringify(ncollectors));
    var collectorOptions = [];
    for (var index = 0; index < newCollectorCode.length; index++) {
      var ojjCollector = {
        value: newCollectorCode[index].CollectorID,
        label: newCollectorCode[index].fullName,
      };
      collectorOptions.push(ojjCollector);
    }
    setCollectorCOde(collectorOptions);
    setcollectorSelectvalue(collectorOptions[0]);

    setLoading(false);
  };

  useEffect(() => {
    fetchcollector();
  }, [ncollectors]);

  const fetch = async () => {
    setLoading(true);
    let newCoopCOde = await JSON.parse(JSON.stringify(cooperative));
    var options = [];
    for (var index = 0; index < newCoopCOde.length; index++) {
      var ojj = {
        value: newCoopCOde[index].CoOperativeCode,
        label: newCoopCOde[index].CoOperativeCode,
      };
      options.push(ojj);
    }
    if (options.length > 0) {
      setCoperativeCode(options);
      setcooperativeSelectvalue(options[0]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
    fetchcollector();
    coopCodeGet({ value: "YT47" });
    postNotification("YT47", "2");
  }, []);

  const handleAddNotification = (e) => {
    e.preventDefault();
    console.log("clicked");
    setnotificationPopup(true);
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 contentMainSection">
      <div>
                <div className="mainHeader">
                    <div className="fontHeader">Notification List</div>
                    <div>
                    <Transdate />
                    </div>
                </div>
                <hr />
            </div>
        <section className="content-section main-content">
          <div className="content">
            <div className=" col-lg-12 col-sm-12">
              <div className="row">
                <div className="col-lg-2  col-md-3 col-sm-2 position-relative">
                  <select
                    style={{ fontSize: "11px" }}
                    name="snotifiaction"
                    value={chooseOption}
                    onChange={handleChange}
                    className="form-control form-control-sm mb-1"
                  >
                    <option selected style={{ fontSize: "11px" }}>
                      select Option
                    </option>
                    <option value="Cooperative">Cooperative</option>
                    <option value="Collector">Collector</option>
                  </select>
                  <i class="fas fa-angle-down  notificationpositondrop"></i>{" "}
                </div>

                {chooseOption === "Cooperative" && (
                  <>
                    <div className="col-lg-2 col-md-3 col-sm-2  Search">
                      <Select
                        className="selectT"
                        options={ncooperativecode}
                        onChange={coopCodeGet}
                        defaultValue={ncooperativecode[0]}
                      />{" "}
                    </div>
                    <div className="col-lg-6 offset-lg-2 offset-md-3  offset-sm-0 col-md-3 col-sm-3 text-end ">
                      <button
                        className="btn btn-sm btn-cmpy"
                        onClick={handleAddNotification}
                      >
                        {" "}
                        Add Notification +
                      </button>
                    </div>{" "}
                  </>
                )}
                {chooseOption === "Collector" && (
                  <>
                    <div className="col-lg-2 col-md-3 col-sm-2  Search">
                      <Select
                        className="selectT"
                        options={ncooperativecode}
                        onChange={coopCodeGet}
                        value={cooperativeSelectvalue}
                      />
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-2  Search">
                      <Select
                        className="selectT"
                        options={collectorCode}
                        onChange={collecetorCodeGet}
                        value={collectorSelectvalue}
                      />
                    </div>
                    <div className="col-lg-6  offset-md-0  offset-sm-0 col-md-3 col-sm-3 text-end ">
                      <button
                        className="btn btn-sm btn-cmpy"
                        onClick={handleAddNotification}
                      >
                        {" "}
                        Add Notification +
                      </button>
                    </div>
                  </>
                )}

                {loading ? (
                  <Spinner />
                ) : (
                  <div
                    className="outer-wrapper pt-2"
                    style={{ maxWidth: "100%", overflowX: "auto" }}
                  >
                    <div
                      className="table-wrapper"
                      style={{ margin: "3px", overflowX: "auto" }}
                    >
                      <table className="table table-striped">
                        <thead>
                          <tr className="tableHead">
                            <td className="tc" style={{ width: "10px" }}>
                              S.N.
                            </td>
                            <td className="tc">Tittle</td>
                            <td
                              className="tc"
                              style={{ position: "static", width: "150px" }}
                            >
                              Description
                            </td>
                            <td
                              className="tc"
                              style={{ position: "static", width: "95px" }}
                            >
                              Date
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {chooseOption === "Collector" &&
                          notificationList.length > 0 ? (
                            notificationList.map((item, i) => (
                              <tr key={i + 1}>
                                <td className="tc" >
                                  {i + 1}
                                </td>
                                <td className="tl">{item.NotiHead}</td>
                                <td
                                  className="tc"
                                  style={{ position: "static", width: "150px" }}
                                >
                                  {item.NotiBody}
                                </td>
                                <td
                                  className="tc"
                                  style={{ position: "static", width: "95px" }}
                                >
                                  {item.Nepalidate}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td></td>
                              <td></td>
                              <td>No data found</td>
                              <td></td>
                            </tr>
                          )}
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
      <Notificationpopup
        trigger={notificationPopup}
        setTrigger={setnotificationPopup}
   
      />
    </>
  );
}

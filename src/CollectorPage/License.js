import React, { useContext, useState, useEffect ,useRef} from "react";
import cooperativeContext from "../component/Cooperative/cooperativeContext";
import collectorContext from "../component/Collector/collectorContext";
import $ from "jquery";
export default function License(props) {
 
  const context = useContext(collectorContext);
  const {
    popup, setPopup,
    cooperativeCode,
    setCooperativeCode,
    userid,
    editCollector,
    addCollector,
    collectorEdit,
    setCollectorEdit,
    edit,
    collectorInitianValue,
    setEdit,
  } = context;
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setCollectorEdit({ ...collectorEdit, [name]: value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("here");
    setformErrors(validate(collectorEdit));
    setIsSubmit(true);
  };
  const PreviousPage = () => {
    props.setActive({
      tab1: false,
      tab2: true,
      tab3: false,
    });
  };
  const myref = useRef(null)
  console.log(edit)
  useEffect(() => {
    myref.current.scrollIntoView()
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(cooperativeCode)
      const collectorData = {
        CoOperativeCode: cooperativeCode,
        Fullname: collectorEdit.FatherName,
        IsActive: collectorEdit.IsActive,
        UserName: collectorEdit.UserName,
        IMEI_NUM: collectorEdit.IMEI_NUM,
        FatherName: collectorEdit.FatherName,
        TAddress: collectorEdit.TAddress,
        PAddress: collectorEdit.PAddress,
        Email: collectorEdit.Email,
        PhNum: collectorEdit.PhNum,
        EmergencyContact: collectorEdit.EmergencyContact,
        Guarantee: collectorEdit.Guarantee,
        BranchID: collectorEdit.BranchID,
        ActiveInActive: collectorEdit.ActiveInActive,
        NameNepali: collectorEdit.NameNepali,
        createdUserID: userid,
        IsAllowSignature: collectorEdit.IsAllowSignature,
        CollectorID:collectorEdit.CollectorID
      };
      if(edit){
        editCollector(collectorData)
      }else{
        addCollector(collectorData);
      }
     
      setIsSubmit(false);
      setCollectorEdit(collectorInitianValue);
      props.setActive({
        tab1: true,
        tab2: false,
        tab3: false,
      });
      setPopup(false)

    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.IsActive) {
      errors.IsActive = "IsActive is required";
    }

    if (!values.IMEI_NUM) {
      errors.IMEI_NUM = "IMEI_NUM is required";
    }

    if (!values.Guarantee) {
      errors.Guarantee = "Guarantee is required";
    }
    if (!values.ActiveInActive) {
      errors.ActiveInActive = "ActiveInActive is required";
    }
    if (!values.IsAllowSignature) {
      errors.IsAllowSignature = "IsAllowSignature is required";
    }
    return errors;
  };

  const closePopup = (e) => {
    e.preventDefault();
    $('.displayPopupCollector').fadeOut();
    setPopup(false);
    setCollectorEdit(collectorInitianValue)
  };
  return (
    <>
    <div className="container-fluid basicform"  ref={myref}>
      <div className="row">
        <div className="col-lg-6">
        <div className="col-lg-12  mb-3">
              <label htmlFor="CreditLimit" className="form-label">
                IMEI Number
              </label>
              <input
                type="number"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.IMEI_NUM}
                onChange={handleChange}
                name="IMEI_NUM"
                placeholder="IMEI Number"
                aria-label="IMEI_NUM"
                id="IMEI_NUM"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{formErrors.IMEI_NUM}</p>
            </div>
            <div className="col-lg-12   mb-3">
              <label htmlFor="Guarantee" className="form-label">
                Guarantee
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.Guarantee}
                onChange={handleChange}
                placeholder="Guarantee"
                aria-label="Guarantee"
                name="Guarantee"
                id="Guarantee"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{formErrors.Guarantee}</p>
            </div>
              
        </div>

        <div className="col-lg-6 ">
        <div className="col-lg-12  mb-3">
              <label htmlFor="ActiveInActive" className="form-label">
                ActiveInActive
              </label>
              <select
                style={{ fontSize: "11px" }}
                name="ActiveInActive"
                value={collectorEdit.ActiveInActive}
                onChange={handleChange}
                className="form-control form-control-sm mb-1"
              >
                <option value="" selected style={{ fontSize: "11px" }}>
                  select Option
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              <p className="errormsg ">
                {formErrors.ActiveInActive}
              </p>
              <i class="fas fa-angle-down  position-absolute "></i>
            </div>
            <div className="col-lg-12  mb-3  position-relative">
              <label htmlFor="IsActive " className="form-label">
                IsActive
              </label>
              <select
                style={{ fontSize: "11px" }}
                name="IsActive"
                value={collectorEdit.IsActive}
                onChange={handleChange}
                className="form-control form-control-sm mb-1"
              >
                <option value="" selected style={{ fontSize: "11px" }}>
                  select Option
                </option>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              <p className="errormsg ">{formErrors.IsActive}</p>
              <i class="fas fa-angle-down  position-absolute "></i>
            </div>
            <div className="col-lg-12  mb-3 formposition position-relative">
              <label htmlFor="IsAllowSignature " className="form-label">
                IsAllowSignature
              </label>
              <select
                style={{ fontSize: "11px" }}
                name="IsAllowSignature"
                value={collectorEdit.IsAllowSignature}
                onChange={handleChange}
                className="form-control form-control-sm mb-1"
              >
                <option value="" selected style={{ fontSize: "11px" }}>
                  select Option
                </option>
                <option value="Y">Show</option>
                <option value="N">Hide</option>
              </select>
              <p className="errormsg ">
                {formErrors.IsAllowSignature}
              </p>
              <i class="fas fa-angle-down  position-absolute "></i>
            </div>
         
        </div>
      </div>
    </div>
    <div className="p-2 py-3 col-lg-12 basicALertfooter mb-3">
        <button className="btn btn-sm btn-cmpy ml-2" onClick={PreviousPage}>
          Prev
        </button>
        <button
          className="btn btn-sm btn-cmpy ml-2"
          onClick={onSubmitForm}
          style={{ background: "red" }}
        >
          {edit ? "Edit" : "Submit"}
        </button>
        <button className="btn btn-sm btn-cmpy ml-2" onClick={closePopup}>
          Cancel
        </button>
      </div>
  </>
);
}

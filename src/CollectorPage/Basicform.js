import React, { useContext, useState, useEffect } from "react";
import collectorContext from "../component/Collector/collectorContext";
import $ from "jquery";
export default function Basicform(props) {
  const context = useContext(collectorContext);
  const {
    userid,
    addCollector,
    collectorEdit,
    setCollectorEdit,
    collectorInitianValue,
    edit,
    setEdit,
    collectorBasicFormError, 
    setCollectorBasicFormError,
        collectorIsSubmit, 
        setCollectorIsSubmit
  } = context;

  const { popup, setPopup } = useContext(collectorContext);
  // const [formErrors, setformErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setCollectorEdit({ ...collectorEdit, [name]: value });
  };

  const BasicformNext = (e) => {
    console.log("here");
    e.preventDefault();
    setCollectorBasicFormError(validate(collectorEdit));
    setCollectorIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(collectorBasicFormError).length === 0 && collectorIsSubmit) {
      props.setActive({
        tab1: false,
        tab2: true,
        tab3: false,
      });
    }
  }, [collectorBasicFormError]);
  const closePopup = (e) => {
    e.preventDefault();
    setPopup(false);
    $('.displayPopupCollector').fadeOut(100);
    setCollectorEdit(collectorInitianValue)
    setCollectorBasicFormError({});
    setCollectorIsSubmit(false)
  };

  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.BranchID) {
      errors.BranchID = "Branch ID is required";
    }

    if (!values.UserName) {
      errors.UserName = "UserName  is required";
    }
    if (!values.FullName) {
      errors.FullName = "FullName  is required";
    }

    if (!values.FatherName) {
      errors.FatherName = "FatherName is required";
    }

    if (!values.NameNepali) {
      errors.NameNepali = "NameNepali is required";
    }
    return errors;
  };
  return (
    <>
      <div className="container-fluid basicform">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-12   mb-3">
              <label htmlFor="Fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.FullName}
                onChange={handleChange}
                name="FullName"
                placeholder="Full Name"
                aria-label="Fullname"
                id="Fullname"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{collectorBasicFormError.FullName}</p>
            </div>
            <div className="col-lg-12  mb-3">
              <label htmlFor="NameNepali" className="form-label">
                Name Nepali
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.NameNepali}
                onChange={handleChange}
                name="NameNepali"
                placeholder="Name Nepali"
                aria-label="NameNepali"
                id="NameNepali"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{collectorBasicFormError.NameNepali}</p>
            </div>
            <div className="col-lg-12  mb-3">
              <label htmlFor="FatherName" className="form-label">
                Father Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.FatherName}
                onChange={handleChange}
                placeholder="Father Name"
                aria-label="FatherName"
                name="FatherName"
                id="FatherName"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{collectorBasicFormError.FatherName}</p>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="col-lg-12  mb-3">
              <label htmlFor="UserName" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control form-control-sm "
                value={collectorEdit.UserName}
                onChange={handleChange}
                name="UserName"
                placeholder="Username"
                aria-label="UserName"
                id="UserName"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{collectorBasicFormError.UserName}</p>
            </div>
            <div className="col-lg-12  mb-3">
              <label htmlFor="BranchID" className="form-label">
                Branch ID
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.BranchID}
                onChange={handleChange}
                name="BranchID"
                placeholder="Branch ID"
                aria-label="BranchID"
                id="BranchID"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{collectorBasicFormError.BranchID}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 py-3 col-lg-12 basicALertfooter  mb-2">
        <button
          onClick={BasicformNext}
          className="btn btn-sm btn-cmpy ml-2"
          style={{ background: "red" }}
        >
          Next
        </button>
        <button className="btn btn-sm btn-cmpy ml-2" onClick={closePopup}>
          Cancel
        </button>
      </div>
    </>
  );
}

import React, { useContext, useState, useEffect,useRef } from "react";
import cooperativeContext from "../component/Cooperative/cooperativeContext";
import collectorContext from "../component/Collector/collectorContext";
export default function Contactform(props) {
  const { popup, setPopup } = useContext(cooperativeContext);
  const context = useContext(collectorContext);
  const { collectorEdit, setCollectorEdit } = context;
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

    const myref = useRef(null)
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setCollectorEdit({ ...collectorEdit, [name]: value });
  };
  const ContactformNext = (e) => {
    e.preventDefault();
    setformErrors(validate(collectorEdit));
    setIsSubmit(true);
  };

  useEffect(() => {
    myref.current.scrollIntoView()
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.setActive({
        tab1: false,
        tab2: false,
        tab3: true
      });
    }
  }, [formErrors]);

  const PreviousPage = () =>{
    props.setActive({
      tab1: true,
      tab2: false,
      tab3: false
    });
  }
  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.TAddress) {
      errors.TAddress = "TAddress is required";
    }
    if (!values.PAddress) {
      errors.PAddress = "PAddress is required";
    }
    if (!values.PhNum) {
      errors.PhNum = "PhNum is required";
    } else if (!numv.test(values.PhNum)) {
      errors.PhNum = "Please enter number only";
    }

    if (!values.Email) {
      errors.Email = "Email is required";
    } else if (!regex.test(values.Email)) {
      errors.Email = "this is not a valid email format";
    }
    if (!values.EmergencyContact) {
      errors.EmergencyContact = "EmergencyContact is required";
    } else if (!numv.test(values.EmergencyContact)) {
      errors.EmergencyContact = "Please enter number only";
    }

    return errors;
  };
  const closePopup = (e) => {
    e.preventDefault();
    setPopup(false);
  };
  return (
    <>
      <div className="container-fluid basicform" ref={myref}>
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-12 formposition  mb-3">
              <label htmlFor="TAddress" className="form-label">
                Temporary Address
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.TAddress}
                onChange={handleChange}
                name="TAddress"
                placeholder="TAddress"
                aria-label="TAddress"
                id="TAddress"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg errorpositon">{formErrors.TAddress}</p>
            </div>
            <div className="col-lg-12  mb-3">
              <label htmlFor="PAddress" className="form-label">
                Permanent Address
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.PAddress}
                onChange={handleChange}
                name="PAddress"
                placeholder="PAddress"
                aria-label="PAddress"
                id="PAddress"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg errorpositon">{formErrors.PAddress}</p>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="col-lg-12  mb-3">
              <label htmlFor="UserName" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.PhNum}
                onChange={handleChange}
                name="PhNum"
                placeholder="PhNum"
                aria-label="PhNum"
                id="PhNum"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg errorpositon">{formErrors.PhNum}</p>
            </div>
            <div className="col-lg-12  mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.Email}
                onChange={handleChange}
                name="Email"
                placeholder="Email"
                aria-label="Email"
                id="Email"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg errorpositon">{formErrors.Email}</p>
            </div>

            <div className="col-lg-12  mb-3">
              <label htmlFor="EmergencyContact" className="form-label">
                Emergency Contact
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={collectorEdit.EmergencyContact}
                onChange={handleChange}
                placeholder="EmergencyContact"
                aria-label="EmergencyContact"
                name="EmergencyContact"
                id="EmergencyContact"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg errorpositon">
                {formErrors.EmergencyContact}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 py-3 col-lg-12 basicALertfooter  mb-2">
      <button className="btn btn-sm btn-cmpy ml-2" onClick={PreviousPage}>Prev</button>
        <button
          onClick={ContactformNext}
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

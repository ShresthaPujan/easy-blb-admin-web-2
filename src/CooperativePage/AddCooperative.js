import React, { useState, useEffect, useContext, useRef } from "react";
import cooperativeContext from "../component/Cooperative/cooperativeContext";

export default function AddCooperative(props) {
  const context = useContext(cooperativeContext);
  const {
    cooperativeEditInitial,
    setCoperativeEdit,
    cooperativeEdit,
    addCoperative,
    edit,
    setEdit,
  } = context;
  const userinfo = JSON.parse(localStorage.getItem("userInfo"));
  const userid = userinfo.UserID;

  // const initalvalue = props.item;
  const ref = useRef(null);
  const [formErrors, setformErrors] = useState({ val: 1 });
  const [isSubmit, setIsSubmit] = useState(false);
  const [first, setfirst] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoperativeEdit({ ...cooperativeEdit, [name]: value });
  };
  const handlePopupClose = (e) => {
    e.preventDefault();
    props.setTrigger(false);
    setformErrors({ val: 1 });
  };
  const handleAddCooperative = (e) => {
    e.preventDefault();
    setformErrors(validate(cooperativeEdit));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  }, [formErrors]);

  useEffect(() => {
    if (isSubmit) {
      var cooperativedata = {
        logo: cooperativeEdit.logo,
        cooperaticecode: cooperativeEdit.cooperaticecode,
        cooperativename: cooperativeEdit.cooperativename,
        address: cooperativeEdit.address,
        noOfUser: cooperativeEdit.noOfUser,
        licenseExipry: cooperativeEdit.licenseExipry,
        creditlimit: cooperativeEdit.creditlimit,
        contactnumber: cooperativeEdit.contactnumber,
        NickName: cooperativeEdit.NickName,
        ColorCode: cooperativeEdit.ColorCode,
        IsOnline: cooperativeEdit.IsOnline,
        IsPaid: cooperativeEdit.IsPaid,
        ScopeType: cooperativeEdit.ScopeType,
        CbsURL: cooperativeEdit.CbsURL,
        IsWithdrawAllow: cooperativeEdit.IsWithdrawAllow,
        ShowHideBalance: cooperativeEdit.ShowHideBalance,
        AllowMultiDate: cooperativeEdit.AllowMultiDate,
        ContactPerson: cooperativeEdit.ContactPerson,
        CreatedUserID: userid,
      };
      addCoperative(cooperativedata);
      setIsSubmit(false);
      setformErrors({ error: 1 });
      props.setTrigger(false);
      setCoperativeEdit({});
    }
  }, [isSubmit]);
  const handleReset = (event) => {
    event.preventDefault();
    setCoperativeEdit(cooperativeEditInitial);
    setformErrors({ reset: 1 });
  };

  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;

    if (!values.address) {
      errors.address = "required";
    }

    if (!values.cooperaticecode) {
      errors.cooperaticecode = "required";
    }
    if (!values.cooperativename) {
      errors.cooperativename = "required";
    }
    if (!values.contactnumber) {
      errors.contactnumber = "required";
    } else if (!numv.test(values.contactnumber)) {
      errors.contactnumber = "Please enter number only";
    }
    if (!values.creditlimit) {
      errors.creditlimit = " required";
    } else if (!numv.test(values.creditlimit)) {
      errors.creditlimit = "Please enter number only";
    }
    if (!values.logo) {
      errors.logo = "required";
    }
    if (!values.noOfUser) {
      errors.noOfUser = "required";
    } else if (!numv.test(values.noOfUser)) {
      errors.noOfUser = "Please enter number only";
    }

    if (!values.licenseExipry) {
      errors.licenseExipry = "required";
    }
    if (!values.NickName) {
      errors.NickName = "required";
    }
    if (!values.ColorCode) {
      errors.ColorCode = "required";
    }
    if (!values.IsOnline) {
      errors.IsOnline = "required";
    }
    if (!values.IsPaid) {
      errors.IsPaid = "required";
    }
    if (!values.ScopeType) {
      errors.ScopeType = "required";
    }
    if (!values.CbsURL) {
      errors.CbsURL = "required";
    }
    if (!values.IsWithdrawAllow) {
      errors.IsWithdrawAllow = "required";
    }
    if (!values.ShowHideBalance) {
      errors.ShowHideBalance = "required";
    }
    if (!values.AllowMultiDate) {
      errors.AllowMultiDate = "required";
    }
    if (!values.ContactPerson) {
      errors.ContactPerson = "required";
    }

    return errors;
  };
 


  return props.trigger ? (
    <div className="popUP container-fluid   col-lg-12 col-md-12 col-sm-12 col-xs-12"   >
      <div className="popup-inner container-fluid  " style={{padding:"30px"}}>
        <button className="btn closebtn" onClick={handlePopupClose}  >
          <i className="bi bi-x"></i>
        </button>
        <form action="">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {props.children}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col-lg-3">
                    <label htmlFor="cooperaticecode" className="form-label">
                      Coop.Code
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.cooperaticecode ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.cooperaticecode}
                      onChange={handleChange}
                      name="cooperaticecode"
                      placeholder="Coop.Code"
                      aria-label="Co Operative Code"
                      id="cooperaticecode"
                      disabled={edit}
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div className="col-lg-9">
                    <label htmlFor="cooperativename" className="form-label">
                      Coop.Name
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.cooperativename ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.cooperativename}
                      onChange={handleChange}
                      placeholder="Coop.Name"
                      name="cooperativename"
                      id="cooperativename"
                      aria-label="Co Operative Name"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="NickName" className="form-label">
                      Alias
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.NickName ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.NickName}
                      onChange={handleChange}
                      placeholder="Alias"
                      aria-label="NickName"
                      id="NickName"
                      name="NickName"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="ScopeType" className="form-label">
                      ScopeType
                    </label>
                    <input
                      type="text"
                      value={cooperativeEdit.ScopeType}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.ScopeType ? "errorBorder" : ""
                      }`}
                      onChange={handleChange}
                      placeholder="ScopeType"
                      aria-label="ScopeType"
                      id="ScopeType"
                      name="ScopeType"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="ContactPerson" className="form-label">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      value={cooperativeEdit.ContactPerson}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.ContactPerson ? "errorBorder" : ""
                      }`}
                      onChange={handleChange}
                      placeholder="ContactPerson"
                      aria-label="ContactPerson"
                      id="ContactPerson"
                      name="ContactPerson"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="contactnumber" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.contactnumber ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.contactnumber}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      aria-label="Contact Number"
                      name="contactnumber"
                      id="contactnumber"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="Address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.address ? "errorBorder" : ""
                      }`}
                      placeholder="Address"
                      aria-label="Address"
                      name="address"
                      id="Address"
                      value={cooperativeEdit.address}
                      onChange={handleChange}
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="Logo" className="form-label">
                      Logo
                    </label>
                    <input
                      type="text"
                      value={cooperativeEdit.logo}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.logo ? "errorBorder" : ""
                      }`}
                      onChange={handleChange}
                      placeholder="Logo"
                      aria-label="Logo"
                      id="Logo"
                      name="logo"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <label htmlFor="CbsURL" className="form-label">
                    CBS URL
                  </label>
                  <input
                    type="text"
                    value={cooperativeEdit.CbsURL}
                    className={`form-control form-control-sm mb-1  ${
                      formErrors.CbsURL ? "errorBorder" : ""
                    }`}
                    onChange={handleChange}
                    placeholder="CbsURL"
                    aria-label="CbsURL"
                    id="CbsURL"
                    name="CbsURL"
                    aria-describedby="addon-wrapping"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="licenseExipry" className="form-label">
                      Exipry Date{" "}
                    </label>
                    <input
                      type="date"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.licenseExipry ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.licenseExipry}
                      onChange={handleChange}
                      placeholder="license Expiry"
                      aria-label="license Expiry"
                      id="licenseExipry"
                      name="licenseExipry"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="creditlimit" className="form-label">
                      Credit Limit
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.creditlimit ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.creditlimit}
                      onChange={handleChange}
                      placeholder="Credit Limit"
                      aria-label="Credit Limit"
                      name="creditlimit"
                      id="creditlimit"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="" className="form-label">
                      Medium
                    </label>
                    <select
                      style={{ fontSize: "11px" }}
                      value={cooperativeEdit.IsOnline}
                      name="IsOnline"
                      onChange={handleChange}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.IsOnline ? "errorBorder" : ""
                      }`}
                    >
                      <option value="" selected style={{ fontSize: "11px" }}>
                        select Medium
                      </option>
                      <option value="Y">Online</option>
                      <option value="N">Offline</option>
                    </select>
                    <span className="errormsg">{formErrors.IsOnline}</span>
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="noOfUser" className="form-label">
                      No of User
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.noOfUser ? "errorBorder" : ""
                      }`}
                      value={cooperativeEdit.noOfUser}
                      onChange={handleChange}
                      placeholder="No Of User"
                      aria-label="No Of User"
                      name="noOfUser"
                      id="noOfUser"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="ShowHideBalance" className="form-label">
                      Balance
                    </label>
                    <input
                      type="text"
                      value={cooperativeEdit.ShowHideBalance}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.ShowHideBalance ? "errorBorder" : ""
                      }`}
                      onChange={handleChange}
                      placeholder="ShowHideBalance"
                      aria-label="ShowHideBalance"
                      id="ShowHideBalance"
                      name="ShowHideBalance"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="AllowMultiDate" className="form-label">
                      Date Type
                    </label>
                    <select
                      style={{ fontSize: "11px" }}
                      value={cooperativeEdit.AllowMultiDate}
                      name="AllowMultiDate"
                      onChange={handleChange}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.AllowMultiDate ? "errorBorder" : ""
                      }`}
                    >
                      <option value="" selected style={{ fontSize: "11px" }}>
                        select Date
                      </option>
                      <option value="Y">Multi Date</option>
                      <option value="N">Single Date</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="ColorCode" className="form-label">
                      Color Code
                    </label>
                    <input
                      type="color"
                      value={cooperativeEdit.ColorCode}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.ColorCode ? "errorBorder" : ""
                      }`}
                      onChange={handleChange}
                      placeholder="ColorCode"
                      aria-label="ColorCode"
                      id="ColorCode"
                      name="ColorCode"
                      aria-describedby="addon-wrapping"
                    />
                  </div>

                  <div className="col-lg-6">
                    <label htmlFor="IsWithdrawAllow" className="form-label">
                      Withdraw
                    </label>
                    <select
                      style={{ fontSize: "11px" }}
                      value={cooperativeEdit.IsWithdrawAllow}
                      name="IsWithdrawAllow"
                      onChange={handleChange}
                      className={`form-control form-control-sm mb-1  ${
                        formErrors.IsWithdrawAllow ? "errorBorder" : ""
                      }`}
                    >
                      <option value="" selected style={{ fontSize: "11px" }}>
                        select Withdraw
                      </option>
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                    </select>{" "}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <label htmlFor="IsPaid" className="form-label">
                  Status
                </label>
                <select
                  style={{ fontSize: "11px" }}
                  value={cooperativeEdit.IsPaid}
                  name="IsPaid"
                  onChange={handleChange}
                  className={`form-control form-control-sm mb-1  ${
                    formErrors.IsPaid ? "errorBorder" : ""
                  }`}
                >
                  <option value="" selected style={{ fontSize: "11px" }}>
                    select Status
                  </option>
                  <option value="Y">Paid</option>
                  <option value="N">Unpaid</option>
                </select>
              </div>
            </div>
            <div className="container">
              <div className="row ">
                <div className="  col-lg-12 col-md-12 col-sm-12 text-right p-0  my-3 col-12">
                  <button
                    className="btn btn-primary mx-2 addresbtn"
                    onClick={handleAddCooperative}
                  >
                    {edit ? "Edit" : "ADD"}{" "}
                  </button>
                  <button
                    className="btn btn-danger  addresbtn"
                    onClick={handleReset}
                  >
                    {" "}
                    RESET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

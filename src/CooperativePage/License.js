import React, { useContext,useEffect } from "react";
import { useState } from "react";
import cooperativeContext from "../component/Cooperative/cooperativeContext";
import $ from "jquery";
export default function License(props) {
  const context = useContext(cooperativeContext);
  const {edit,basicformInitialValue,contactFormInitailValue,licenseformValueInitialValue,setContactFormvalue,setBasicFormvalue,addCoperative,userid,licenseformValue,contactformValue,BasicformValue, setlicenseformValue, check, setCheck,popup, setPopup,setCoperativeEdit,
    cooperativeEdit} = context;
    const [formErrors, setformErrors] = useState({ });
    const [isSubmit, setIsSubmit] = useState(false);

 const handleChange = (e) => {
  const target = e.target;
  const name = target.name;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  setCheck(e.target.checked)
  setlicenseformValue({ ...licenseformValue, [name]: value });
};
const onSubmitForm = (e)=>{
  console.log("here")
  e.preventDefault();
  setformErrors(validate(licenseformValue));
  $('.displayPopup').fadeOut(100);
  setIsSubmit(true);

}
const Previous = () =>{
  props.setActive({
    tab1:false,
    tab2:true,
    tab3:false
  })
}

useEffect(() => {

  if (Object.keys(formErrors).length === 0  && isSubmit) {
    let isPaid;
      if(licenseformValue.IsPaid === true){
        isPaid = "Y"
      }else{
        isPaid = "N"
      }
      var cooperativedata = {
        logo: BasicformValue.logo,
        cooperaticecode: BasicformValue.cooperaticecode,
        cooperativename: BasicformValue.cooperativename,
        address: contactformValue.address,
        noOfUser: licenseformValue.noOfUser,
        licenseExipry: licenseformValue.licenseExipry,
        creditlimit: licenseformValue.creditlimit,
        contactnumber: contactformValue.contactnumber,
        NickName: BasicformValue.NickName,
        ColorCode: BasicformValue.ColorCode,
        IsOnline: licenseformValue.IsOnline,
        IsPaid: isPaid,
        ScopeType: BasicformValue.ScopeType,
        CbsURL: BasicformValue.CbsURL,
        IsWithdrawAllow: licenseformValue.IsWithdrawAllow,
        ShowHideBalance: licenseformValue.ShowHideBalance,
        AllowMultiDate: licenseformValue.AllowMultiDate,
        ContactPerson: contactformValue.ContactPerson,
        CreatedUserID: userid,
      };
      addCoperative(cooperativedata);
      setIsSubmit(false);
      setformErrors({  });
      setContactFormvalue(contactFormInitailValue);
      setBasicFormvalue(basicformInitialValue);
      setlicenseformValue(licenseformValueInitialValue);
  
    props.setActive({
      tab1:true,
      tab2:false,
      tab3:false,
      tab4:false
    })
    setPopup(false);
    setlicenseformValue({})

  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const numv = /^[0-9]+$/i;

  if (!values.creditlimit) {
    errors.creditlimit = "Required";
  } else if (!numv.test(values.creditlimit)) {
    errors.creditlimit = "Please enter number only";
  }
 
  if (!values.noOfUser) {
    errors.noOfUser = "Required";
  } else if (!numv.test(values.noOfUser)) {
    errors.noOfUser = "Please enter number only";
  }

  if (!values.licenseExipry) {
    errors.licenseExipry = "Required";
  }

  if (!values.IsOnline) {
    errors.IsOnline = "Required";
  }  

  if (!values.IsWithdrawAllow) {
    errors.IsWithdrawAllow = "Required";
  }
  if (!values.ShowHideBalance) {
    errors.ShowHideBalance = "Required";
  }
  if (!values.AllowMultiDate) {
    errors.AllowMultiDate = "Required";
  }

  return errors;
};

  const closePopup = (e) => {
    e.preventDefault();
    $('.displayPopup').fadeOut(100);
    setPopup(false);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="col-lg-12 formposition  mb-4">
          <label htmlFor="cooperaticecode" className="form-label">
                       Credit Limit
                        </label>
                        <input
                          type="number"
                          className="form-control form-control-sm mb-1"  
                          value={licenseformValue.creditlimit}
                          onChange={handleChange}
                          name="creditlimit"
                          placeholder="creditlimit"
                          aria-label="creditlimit"
                          id="creditlimit"
                          aria-describedby="addon-wrapping"
                        />
             <p className="errormsg errorpositon">{formErrors.creditlimit}</p>
          </div>
          <div className="col-lg-12 formposition mb-4">
            <label htmlFor="IsOnline" className="form-label">
              Medium
            </label>
            <select
              style={{ fontSize: "11px" }}
              value={licenseformValue.IsOnline}
              name="IsOnline"
              onChange={handleChange}
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Option
              </option>
              <option value="Y">Online</option>
              <option value="N">Offline</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>
            <p className="errormsg errorpositon">{formErrors.IsOnline}</p>
          </div>
        
          <div className="col-lg-12  formposition mb-4">
            <label htmlFor="noOfUser" className="form-label">
              No of User
            </label>
            <input
              type="number"
              value={licenseformValue.noOfUser}
              onChange={handleChange}
              className="form-control form-control-sm mb-1"
              placeholder="No Of User"
              aria-label="No Of User"
              name="noOfUser"
              id="noofUser"
              aria-describedby="addon-wrapping"
            />
             <p className="errormsg errorpositon">{formErrors.noOfUser}</p>
          </div>
          <div className="col-lg-12 formposition mb-4 position-relative">
            <label htmlFor="ShowHideBalance " className="form-label">
              Balance
            </label>
            <select
              style={{ fontSize: "11px" }}
              value={licenseformValue.ShowHideBalance}
              name="ShowHideBalance"
              onChange={handleChange}
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Balance
              </option>
              <option value="Y">Show</option>
              <option value="N">Hide</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>
            <p className="errormsg errorpositon">{formErrors.ShowHideBalance}</p>
          </div>
          </div>
        <div className="col-lg-6">
         
          <div className="col-lg-12 formposition mb-4">
            <label htmlFor="AllowMultiDate" className="form-label">
              Date Type
            </label>
            <select
              style={{ fontSize: "11px" }}
              value={licenseformValue.AllowMultiDate}
              name="AllowMultiDate"
              onChange={handleChange}
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Option
              </option>
              <option value="Y">Multi Date</option>
              <option value="N">Single Date</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>
            <p className="errormsg errorpositon">{formErrors.AllowMultiDate}</p>
          </div>
          <div className="col-lg-12 formposition  mb-4">
            <label htmlFor="IsWithdrawAllow" className="form-label">
              Withdraw
            </label>
            <select
              style={{ fontSize: "11px" }}
              value={licenseformValue.IsWithdrawAllow}
              name="IsWithdrawAllow"
              onChange={handleChange}
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Option
              </option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>{" "}
            <p className="errormsg errorpositon">{formErrors.IsWithdrawAllow}</p>
          </div>
          <div className="col-lg-12 formposition mb-1">
            <label htmlFor="licenseExipry" className="form-label">
              Exipry Date{" "}
            </label>
            <input
              type="date"
              value={licenseformValue.licenseExipry}
              onChange={handleChange}
              className="form-control form-control-sm mb-1"
              placeholder="license Expiry"
              aria-label="license Expiry"
              id="licenseExipry"
              name="licenseExipry"
              aria-describedby="addon-wrapping"
            />
               <p className="errormsg errorpositon">{formErrors.licenseExipry}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-12 formposition  mb-4">
        <div>
          <label>
            <input name="IsPaid" type="checkbox"
                  value={licenseformValue.IsPaid}
                  checked={check}
                  onChange={handleChange} />
          </label>
          <span> Allow permission to use App</span>
        </div>
      </div>
   
      <div className="p-2 py-3 basicALertfooter mb-4">
      <button className="btn btn-sm btn-cmpy" onClick={   Previous}>   Prev</button>
        <button className="btn btn-sm btn-cmpy ml-2" onClick={onSubmitForm} style={{background:"red"}}>Submit</button>
        <button className="btn btn-sm btn-cmpy ml-2" onClick={closePopup}>
          Cancel
        </button>
      </div>
    </div>
  );
}

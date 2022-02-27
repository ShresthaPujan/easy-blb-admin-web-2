import React, { useContext } from "react";
import cooperativeContext from "../component/Cooperative/cooperativeContext";
export default function License() {
  const context = useContext(cooperativeContext);
  const { popup, setPopup } = context;

  const closePopup = (e) => {
    e.preventDefault();
    setPopup(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="col-lg-12  mb-2">
            <label htmlFor="CreditLimit" className="form-label">
              Credit Limit
            </label>
            <input
              type="number"
              className="form-control form-control-sm mb-1"
              value=""
              name=""
              placeholder="Credit Limit"
              aria-label="CreditLimit"
              id="CreditLimit"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="col-lg-12 mb-2">
            <label htmlFor="" className="form-label">
              Medium
            </label>
            <select
              style={{ fontSize: "11px" }}
              name="IsOnline"
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Medium
              </option>
              <option value="Y">Online</option>
              <option value="N">Offline</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>
          </div>

          <div className="col-lg-12  mb-2">
            <label htmlFor="noOfUser" className="form-label">
              No of User
            </label>
            <input
              type="text"
              className="form-control form-control-sm mb-1"
              placeholder="No Of User"
              aria-label="No Of User"
              name="noOfUser"
              id="noOfUser"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="col-lg-12  mb-2position-relative">
            <label htmlFor="ShowHideBalance " className="form-label">
              Balance
            </label>
            <select
              style={{ fontSize: "11px" }}
              name="ShowHideBalance"
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Balance
              </option>
              <option value="Y">Show</option>
              <option value="N">Hide</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="col-lg-12  mb-2">
            <label htmlFor="AllowMultiDate" className="form-label">
              Date Type
            </label>
            <select
              style={{ fontSize: "11px" }}
              name="AllowMultiDate"
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Date
              </option>
              <option value="Y">Multi Date</option>
              <option value="N">Single Date</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>
          </div>
          <div className="col-lg-12   mb-2">
            <label htmlFor="IsWithdrawAllow" className="form-label">
              Withdraw
            </label>
            <select
              style={{ fontSize: "11px" }}
              name="IsWithdrawAllow"
              className="form-control form-control-sm mb-1"
            >
              <option value="" selected style={{ fontSize: "11px" }}>
                select Withdraw
              </option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
            <i class="fas fa-angle-down  position-absolute "></i>{" "}
          </div>
          <div className="col-lg-12  mb-2">
            <label htmlFor="licenseExipry" className="form-label">
              Exipry Date{" "}
            </label>
            <input
              type="date"
              className="form-control form-control-sm mb-1"
              placeholder="license Expiry"
              aria-label="license Expiry"
              id="licenseExipry"
              name="licenseExipry"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="col-lg-12 py-2  mb-2">
          <div>
            <label>
              <input name="IsPaid" type="checkbox" />
            </label>
            <span> Allow permission to use App</span>
          </div>
        </div>

       
        </div>
      </div>
      <div className="p-2 py-3 basicALertfooter mb-2">
        <button className="btn btn-sm btn-cmpy">Submit</button>
        <button className="btn btn-sm btn-cmpy ml-2" onClick={closePopup}>
          Cancel
        </button>
      </div>
    </div>
  );
}

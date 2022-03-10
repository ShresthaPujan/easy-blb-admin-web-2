import React, { useContext, useState, useEffect } from "react";
import collectorContext  from "../Collector/collectorContext";
import notificationContext from "../Notification/Notificationcontext";
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import $ from "jquery";
export default function Basicform(props) {
const{ addNotification,collectorpnotificationcode,coopid,setcoopid,notificationPopup,setnotificationPopup,loading, setLoading,postNotification,notificationList, notiFormError, setNotiFormError, notiIsSubmit, setNotiIsSubmit}=useContext(notificationContext)
 const addcollectornotificationinitialvalue = {
  Nepalidate: "",
  NotificationHeader: "",
  NotificationBody: "",
 }
  const [addcollectornotification, setAddcollectornotification] = useState(addcollectornotificationinitialvalue)
  // const [formErrors, setNotiFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [date, setDate] = useState("")
  const handleChange = (e,bsDate) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setAddcollectornotification({ ...addcollectornotification, [name]: value});
  };
  const handleDate = ({ bsDate, adDate }) => {
    setAddcollectornotification({ ...addcollectornotification, Nepalidate:bsDate})
  };

  const submitNotification = (e) => {
    console.log("here");
    e.preventDefault();
    setNotiFormError(validate(addcollectornotification));
    setNotiIsSubmit(true);
  };
  useEffect(() => {
    
    if (Object.keys(notiFormError).length === 0 && notiIsSubmit) {
      addNotification(addcollectornotification)
     $('.displayPopupCollector').fadeOut(100);
     setnotificationPopup(false);
    }
  }, [notiFormError]);
  const closePopup = (e) => {
    e.preventDefault();
    setnotificationPopup(false);
    $('.displayPopupCollector').fadeOut(100);
    setNotiIsSubmit(false)
    setAddcollectornotification(addcollectornotificationinitialvalue)
    setNotiFormError({})
  };

  const validate = (values) => {
    const errors = {};

    if (!values.NotificationHeader) {
      errors.NotificationHeader = "Notification Header is required";
    }

    if (!values.NotificationBody) {
      errors.NotificationBody = "NotificationBody  is required";
    }
    if (!values.Nepalidate) {
      errors.Nepalidate = "Nepalidate  is required";
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
                Notification Title 
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={addcollectornotification.NotificationHeader}
                onChange={handleChange}
                name="NotificationHeader"
                placeholder="Notification Title"
                aria-label="NotificationHeader"
                id="NotificationHeader"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{notiFormError.NotificationHeader}</p>
            </div>
            <div className="col-lg-12  mb-3">
              <label htmlFor="NotificationBody" className="form-label">
              Description
              </label>
              <input
                type="text"
                className="form-control form-control-sm mb-1"
                value={addcollectornotification.NotificationBody}
                onChange={handleChange}
                name="NotificationBody"
                placeholder="Name Nepali"
                aria-label="NotificationBody"
                id="NotificationBody"
                aria-describedby="addon-wrapping"
              />
              <p className="errormsg ">{notiFormError.NotificationBody}</p>
            </div>
            
          </div>

          <div className="col-lg-6 ">
            <div className="col-lg-12  mb-3">
            <label htmlFor="date">Date</label>
            <Calendar onChange={handleDate} className="form-control form-control-sm mb-1" dateFormat="YYYY/MM/DD"theme="default" language="en" />
              <p className="errormsg ">{notiFormError.Nepalidate}</p>
            </div>
           
          </div>
        </div>
      </div>
      <div className="p-2 py-3 col-lg-12 basicALertfooter  mb-2">
        <button
          onClick={submitNotification}
          className="btn btn-sm btn-cmpy ml-2"
          style={{ background: "red" }}
        >
          Submit
        </button>
        <button className="btn btn-sm btn-cmpy ml-2" onClick={closePopup}>
          Cancel
        </button>
      </div>
    </>
  );
}
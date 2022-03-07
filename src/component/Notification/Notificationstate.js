import notificationContext from "./Notificationcontext";
import cooperativeContext from "../Cooperative/cooperativeContext";
import { useContext, useState } from "react";
const NotificationState =(props) =>{
 const [notificationList, setnotificationList] = useState([])
 const [loading, setLoading] = useState(false)
const {setMsg,userid} = useContext(cooperativeContext);
 
    const  postNotification = async(collectorCode="2",coopCode="yt47") =>{
        var formData={
            CoOperativeCode: coopCode,
            CollectorID: collectorCode
        }
        setLoading(true)
        const response = await fetch ('api2//BLBApi/Notification/GetNotification',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
          });
          const notification = await response.json();
          if(notification.STATUS_CODE === "0"){
            setnotificationList(notification.lstNoti)
          } 
          setLoading(false)
    }
    const addNotification = async (addcollectornotification) => {
        
        const notificationValue = {
          CoOperativeCode: coopid, 
          CollectorID:collectorpnotificationcode,
          Nepalidate: addcollectornotification.Nepalidate,
          NotificationHeader: addcollectornotification.NotificationHeader,
          NotificationBody: addcollectornotification.NotificationBody,
          CreatedUserID: userid,
          CreatedCoOperativeCode:coopid
        }
      const response = await fetch("api2/BLBApi/Notification/CreateNotification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notificationValue),
      });
      const notificationData = await response.json();
      if (notificationData.STATUS_CODE === "0") {
        setnotificationList(notificationList.concat({ 
          NotiHead:notificationValue.NotificationHeader,
          NotiBody:addcollectornotification.NotificationBody,
          Nepalidate: addcollectornotification.Nepalidate,
        }))
        setMsg({
          msg: "Notification Added Successfully",
          type: "alert alert-success",
        });
      }
      }
    
    const [notificationPopup,setnotificationPopup] = useState(false)
    const [coopid,setcoopid] =useState("YT47")
    const[collectorpnotificationcode,setcollectornotificationcode] = useState("1")
    return (
        <notificationContext.Provider value={{addNotification,
          collectorpnotificationcode,setcollectornotificationcode,
          coopid,setcoopid,
        notificationPopup,setnotificationPopup,loading, 
        setLoading,notificationList,postNotification}}>
          {props.children}
        </notificationContext.Provider>
      )

}

export default NotificationState;
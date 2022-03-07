import notificationContext from "./Notificationcontext";

import { useState } from "react";
const NotificationState =(props) =>{
 const [notificationList, setnotificationList] = useState([])
    const  postNotification = async(collectorCode,coopCode) =>{
        var formData={
            CoOperativeCode: coopCode,
            CollectorID: collectorCode
        }
        const response = await fetch ('api2//BLBApi/Notification/GetNotification',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
          });
          const notification = await response.json();
          console.log(notification)
          if(notification.STATUS_CODE === "0"){
            setnotificationList(notification.lstNoti)
          } 

    }
    return (
        <notificationContext.Provider value={{notificationList,postNotification}}>
          {props.children}
        </notificationContext.Provider>
      )

}

export default NotificationState;
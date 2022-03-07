import React , { useState,useContext,useEffect }from 'react'
import Basicform from './Basicform';
import Spinner from '../Spinner/Spinner';
import OutsideAlerter from '../hooks/OutsideAlerter';
import UsewindowDimension from '../hooks/UsewindowDimension';
import $ from "jquery";
export default function Notificationpopup(props) {
    const { height} = UsewindowDimension();
    const [activeTab, setActiveTab] = useState({
        tab1:true,
        tab2:false,
        tab3:false,
  
    });
  const defaultData = {
    cooperativecode :props.cooperativecode,
    collectorcode : props.collectorcode
  }
     

      const closePopup =(e) =>{
          e.preventDefault();
          $('.displayPopupCollector').fadeOut();
          props.setTrigger(false)
      }
      useEffect(() => {
        if(props.trigger){
          $('.displayPopupCollector').fadeIn(100);
        }
         }, [props.trigger])
  return (
      
    <div className="popUP container-fluid  displayPopupCollector col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <OutsideAlerter>
                <div className={height < 500?"insidePopup ip500":"insidePopup"}>
                    <div className="popUpHeader ">
                        <div className='popUpHeaderText '>Add Notification</div> 
                        <div style={{cursor:"pointer"}}><i className="bi bi-x "  onClick={closePopup} style={{fontSize:"25px"}}></i></div>
                    </div>
                  
                    <nav >
                        <ul>    
                            <li className={activeTab.tab1 === true ? "active" : ""} ><i class="fas fa-home icon"></i>Add Notification </li>


                        </ul>
                    </nav>
                 
                        
                    <div className="outlet">
                      <Basicform active={activeTab} setActive={setActiveTab} defaultData={defaultData}/>
                      


                      </div>

                </div>
        </OutsideAlerter>
        </div> 
     
  )
}

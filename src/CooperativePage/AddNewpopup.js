import React , { useState,useContext,useEffect }from 'react'
import { NavLink,Link, useNavigate } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import CollectorC from '../CollectorPage/CollectorC';
import Basicform from './Basicform';
import UsewindowDimension from '../component/hooks/UsewindowDimension';
import Contactform from './Contactform';
import License from './License';
import cooperativeContext from '../component/Cooperative/cooperativeContext';
import Spinner from '../component/Spinner/Spinner';
import OutsideAlerter from '../component/hooks/OutsideAlerter';
import $ from "jquery";

export default function AddNewpopup(props) {
    const { height} = UsewindowDimension();
    const {closepopup} =props.setTriggernew;
    const context = useContext(cooperativeContext)
    const {loading,basicformInitialValue,contactFormInitailValue,licenseformValueInitialValue
      ,setContactFormvalue,setBasicFormvalue,setlicenseformValue,popup,setPopup, basicFormErrors, setBasicFormErrors, basicIsSubmit, setBasicIsSubmit} = context;


    const [activeTab, setActiveTab] = useState({
        tab1:true,
        tab2:false,
        tab3:false
    });
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab({
            tab1:true,
        tab2:false,
        tab3:false
        });
      };
     
      const handleTab4 = () => {
        // update the state to tab2
        setActiveTab({
            tab1:false,
            tab2:false,
            tab3:false,
            tab4:true
        });
      };
      const closePopup =(e) =>{
          e.preventDefault();
          setContactFormvalue(contactFormInitailValue);
          setBasicFormvalue(basicformInitialValue);
          setlicenseformValue(licenseformValueInitialValue);
          props.setTriggernew(false)
          $('.displayPopup').fadeOut(100);
          setActiveTab({
            tab1:true,
            tab2:false,
            tab3:false,
            tab4:false
        });
        setBasicFormErrors({});
        setBasicIsSubmit(false);
      }

   useEffect(() => {
if(props.trigger){
  $('.displayPopup').fadeIn(100);
}
 }, [props.trigger])
  return (
      
    <div className="popUP displayPopup container-fluid   col-lg-12 col-md-12 col-sm-12 col-xs-12 " style={{overflow:"scroll"}}>
        <OutsideAlerter>
        <div className={height < 500?"insidePopup ip500":"insidePopup"}>
            <div className="popUpHeader ">
                 <div className='popUpHeaderText '>Cooperative Information</div> 
                <div style={{cursor:"pointer"}}><i className="bi bi-x "  onClick={closePopup} style={{fontSize:"25px"}}></i></div>
            </div>
            
            <nav >
                <ul>    
                    <li className={activeTab.tab1 === true ? "active" : ""}  onClick={handleTab1}><i class="fas fa-home icon"></i>Basic </li>
                    <li  className={activeTab.tab2 === true ? "active" : "disabled"} ><i class="fas fa-phone icon"></i>Contact </li>
                    <li className={activeTab.tab3 === true ? "active" : "disabled"} ><i class="fas fa-key icon"></i>License </li>
                    <li className={activeTab.tab4 === true ? "active" : ""}  onClick={handleTab4}><i class="fas fa-users icon"></i>Collector </li>
                </ul>
            </nav>
              {loading ? <Spinner/> :(       
            <div className="outlet">
                {activeTab.tab1 &&(<Basicform active={activeTab} setActive={setActiveTab} />)}
                {activeTab.tab2 &&(<Contactform active={activeTab} setActive={setActiveTab}/>)}
                {activeTab.tab3 &&(<License active={activeTab} setActive={setActiveTab}/>)}
                {activeTab.tab4 &&(<CollectorC/>)}
              </div>
              )}    
        </div>
        </OutsideAlerter>
        </div> 
  )

}

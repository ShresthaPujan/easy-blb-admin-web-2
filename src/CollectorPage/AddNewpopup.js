import React , { useState,useContext }from 'react'
import { NavLink,Link, useNavigate } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import CollectorC from '../CollectorPage/CollectorC';
import Basicform from './Basicform';
import UsewindowDimension from '../component/hooks/UsewindowDimension';
import Contactform from './Contactform';
import License from './License';
import cooperativeContext from '../component/Cooperative/cooperativeContext';
import Spinner from '../component/Spinner/Spinner';

export default function AddNewpopup(props) {
    const { height} = UsewindowDimension();
    const {closepopup} =props.setTriggernew;
    const context = useContext(cooperativeContext)
    const {loading,popup,setPopup}=context;
    const [activeTab, setActiveTab] = useState({
        tab1:true,
        tab2:false,
        tab3:false,
  
    });
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab({
            tab1:true,
        tab2:false,
        tab3:false,
     
        });
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab({
            tab1:false,
            tab2:true,
            tab3:false,
     
        });
      };
      const handleTab3 = () => {
        // update the state to tab2
        setActiveTab({
            tab1:false,
            tab2:false,
            tab3:true
    
        });
      };

      const closePopup =(e) =>{
          e.preventDefault();
          setActiveTab({
            tab1:true,
            tab2:false,
            tab3:false,
          })
          props.setTriggernew(false)
      }
  return props.trigger ? (
      
    <div className="popUP container-fluid   col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center" style={{overflow:"scroll"}}>
      
        <div className={height < 500?"insidePopup ip500":"insidePopup"}>
            <div className="popUpHeader ">
                 <div className='popUpHeaderText '>Collector Information</div> 
                <div style={{cursor:"pointer"}}><i className="bi bi-x "  onClick={closePopup} style={{fontSize:"25px"}}></i></div>
            </div>
           
            <nav >
                <ul>    
                    <li className={activeTab.tab1 === true ? "active" : ""}  onClick={handleTab1}><i class="fas fa-home icon"></i>Basic </li>
                    <li  className={activeTab.tab2 === true ? "active" : ""}  onClick={handleTab2}><i class="fas fa-phone icon"></i>Contact </li>
                    <li className={activeTab.tab3 === true ? "active" : ""}  onClick={handleTab3}><i class="fas fa-key icon"></i>License </li>

                </ul>
            </nav>
            {loading ? <Spinner/ >:(
            <div className="outlet">
                {activeTab.tab1 &&(<Basicform active={activeTab} setActive={setActiveTab} />)}
                {activeTab.tab2 &&(<Contactform active={activeTab} setActive={setActiveTab}/>)}
                {activeTab.tab3 &&(<License/>)}
               


              </div>
              )}
        </div>
       
        </div> 
     
  ): ("");
}

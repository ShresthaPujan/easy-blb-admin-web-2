import React , { useState }from 'react'
import { NavLink,Link, useNavigate } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import CollectorC from '../CollectorPage/CollectorC';
import Contact from './Contact';
import Form from './Form';
import SecondForm from './SecondForm';

export default function AddNewpopup(props) {
    const [activeTab, setActiveTab] = useState({
        tab1:true,
        tab2:false,
        tab3:false,
        tab4:false
    });
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab({
            tab1:true,
        tab2:false,
        tab3:false
        });
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab({
            tab1:false,
            tab2:true,
            tab3:false
        });
      };
      const handleTab3 = () => {
        // update the state to tab2
        setActiveTab({
            tab1:false,
            tab2:false,
            tab3:true,
            tab2:false
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
      const closePopup =() =>{
          props.setTrigger(false)
      }
  return props.trigger ? (
      
    <div className="popUP container-fluid   col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center" style={{overflow:"scroll"}}>
      
        <div className="insidePopup">
            <div className="popUpHeader ">
                 <div className='popUpHeaderText '>Cooperative Information</div> 
                <div style={{cursor:"pointer"}}><i className="bi bi-x "  onClick={closePopup} style={{fontSize:"25px"}}></i></div>
            </div>
            
            <nav >
                <ul>    
                    <li className={activeTab.tab1 === true ? "active" : ""}  onClick={handleTab1}><i class="fas fa-home icon"></i>Basic </li>
                    <li  className={activeTab.tab2 === true ? "active" : ""}  onClick={handleTab2}><i class="fas fa-phone icon"></i>Contact </li>
                    <li className={activeTab.tab3 === true ? "active" : ""}  onClick={handleTab3}><i class="fas fa-key icon"></i>License </li>
                    <li className={activeTab.tab4 === true ? "active" : ""}  onClick={handleTab4}><i class="fas fa-users icon"></i>Collector </li>
                </ul>
            </nav>
            <div className="outlet">
                {activeTab.tab1 &&(<Form />)}
                {activeTab.tab2 &&(<SecondForm/>)}
                {activeTab.tab3 &&(<Contact/>)}
                {activeTab.tab4 &&(<CollectorC/>)}


              </div>
        </div>
       
        </div> 
     
  ): ("");
}

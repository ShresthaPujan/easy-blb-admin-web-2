import Sidebarone from './Sidebarone';
import React, { useEffect , useState } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './Login';
import '../style.css';
import { logout} from '../features/Userslice';
import Footer from './Footer';
import AddCooperative from './AddCooperative';

export default function Content() {
 
    const [data, setData] = useState([]);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        fetchFunction()
    },[] );
    async function fetchFunction() {
        try{
          const response = await fetch(`api2/gharelukam/Getcoperative`);
          const jsonData = await response.json();
          setData(jsonData)
                   }
        catch(err) {
          throw err;
         
        }
      }
const handleAddCooperative= (e) =>{
        e.preventDefault();
        setPopup(true);
}
  return <>

         <div className="col-lg-12">
                     <section className="content-section contentmain-popup">
                                                <div className="col-lg-10 sub_menu">
                                                        Company |DashBoard
                                                </div>
                     </section>
                           <section className="content-section">
                                <div className="content">
                                        <div className=" col-lg-12 col-sm-12">
                                                <div className="row first_content">
                                                    <div className="col-lg-6 p-2">
                                                        <h4>Company List</h4>
                                                    </div>
                                                    <div className="col-lg-6 p-2 text-end">
                                                            <button className="btn btn-primary" onClick={handleAddCooperative}> Add Cooperative +</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 p-2 Search">
                                                        <input type="text" placeholder="Search" id=""/>
                                                        <i className="fas fa-search"></i>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6  col-sm-6 p-2 text-end">
                                                            <div className="row">
                                                                <div className=" offset-lg-6 offset-md-6  offset-sm-0 col-lg-6  col-md-6 col-sm-12">
                                                                    <div className="row">
                                                                            <div className="col-lg-6 col-md-6  col-sm-6   ">
                                                                                <div className="dropdown">
                                                                                    <button className="btn  dropdown-toggle dropmenu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    Filter By
                                                                                    </button>
                                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                                <div className="dropdown">
                                                                                    <button className="btn dropdown-toggle dropmenu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    Sort By
                                                                                    </button>
                                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-12 table-responsive">
                                                    <table className="table ">
                                                        <thead>
                                                            <tr>
                                                                <td >Address</td>
                                                                <td >CoOperativeCode</td>
                                                                <td >CoOperativeName</td>
                                                                <td>ContactNum</td>
                                                                <td> CreditLimit</td>
                                                                <td>IsOnline</td>
                                                                <td>Logo</td>
                                                                <td> NoOfUser</td>
                                                                <td> licenseExpiry</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                   {data.map((item,i) => 
                                                            <tr key={i + 1}>
                                                            <td >{item.Address}</td>
                                                                <td >{item.CoOperativeCode}</td>
                                                                <td >{item.CoOperativeName}</td>
                                                                <td>{item.ContactNum}</td>
                                                                <td> {item.CreditLimit}</td>
                                                                <td>{item.IsOnline}</td>
                                                                <td>{item.Logo}</td>
                                                                <td> {item.NoOfUser}</td>
                                                                <td> {item.licenseExpiry}</td>
                                                            </tr>
                                                            )}
                                                           
                                                        </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            
                                        </div>
                                </div>
                            </section>
         </div>
         <AddCooperative trigger ={popup} setTrigger={setPopup}>
             <h4 className="text-center">Add Cooperative</h4>
         </AddCooperative>
        
   
  </>;
}

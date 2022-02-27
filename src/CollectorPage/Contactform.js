import React ,{useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext';
export default function Contactform(props) {
  const context = useContext(cooperativeContext)
  const {popup,setPopup}=context;
  const ContactfomrNext =(e) =>{
    e.preventDefault();
    props.setActive({
      tab1:false,
      tab2:false,
      tab3:true,
      tab4:false
    })
  }
  const closePopup = (e)=>{
    e.preventDefault();
    setPopup(false);
  }
  return (
    <div className="container">
      <div className="row">
      <div className="col-lg-6  mb-3">
                <label htmlFor="TAddress" className="form-label">
                 Temporary Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="TAddress"
                  aria-label="TAddress"
                  id="TAddress"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-6 pl-0 mb-3">
                <label htmlFor="PAddress" className="form-label">
                 Permanent Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="PAddress"
                  aria-label="ContactPerson"
                  id="PAddress"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-6  mb-3">
                <label htmlFor="PhNum" className="form-label">
                 Contact Number
                </label>
                <input
                  type="PhNum"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Phone Number"
                  aria-label="PhNum"
                  id="PhNum"
                  aria-describedby="addon-wrapping"
                />            
          </div>
      </div>
      <div className="p-2  basicALertfooter  mb-2"> 
      <button className='btn btn-sm btn-cmpy'>Submit</button>
      <button onClick={ContactfomrNext} className='btn btn-sm btn-cmpy ml-2 ' style={{background:"red"}}>Next</button>
      <button className='btn btn-sm btn-cmpy ml-2' onClick={closePopup}>Cancel</button>
    </div>
    </div>
  )
}

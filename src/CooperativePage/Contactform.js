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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
      <div className="col-lg-12  mb-3">
                <label htmlFor="Address" className="form-label">
                 Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Address"
                  aria-label="Address"
                  id="Address"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-12  mb-3">
                <label htmlFor="Contact Person" className="form-label">
                 Contact Person
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Contact Person"
                  aria-label="ContactPerson"
                  id="ContactPerson"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          </div>
          <div className="col-lg-6">
          <div className="col-lg-12  mb-3">
                <label htmlFor="Contact Number" className="form-label">
                 Contact Number
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Contact Number"
                  aria-label="ContactNumber"
                  id="ContactNumber"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          </div>
      </div>
      <div className="p-2 py-3 basicALertfooter  mb-2"> 
      <button className='btn btn-sm btn-cmpy'>Submit</button>
      <button onClick={ContactfomrNext} className='btn btn-sm btn-cmpy ml-2 ' style={{background:"red"}}>Next</button>
      <button className='btn btn-sm btn-cmpy ml-2' onClick={closePopup}>Cancel</button>
    </div>
    </div>
  )
}

import React ,{useContext ,useState , useEffect} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext';
export default function Contactform(props) {
  const context = useContext(cooperativeContext)
  const {basicformInitialValue,contactFormInitailValue,licenseformValueInitialValue
    ,setContactFormvalue,setBasicFormvalue,setlicenseformValue,contactformValue,popup,setPopup,setCoperativeEdit,
    cooperativeEdit}=context;
  const [formErrors, setformErrors] = useState({ });
  const [isSubmit, setIsSubmit] = useState(false);
  
 const handleChange = (e) => {
  const target = e.target;
  const name = target.name;
  const value = target.value;
  setContactFormvalue({ ...contactformValue, [name]: value });
};

  const BasicformNext = (e)=>{
    console.log("here")
    e.preventDefault();
    setformErrors(validate(contactformValue));
    setIsSubmit(true);

  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0  && isSubmit) {
      setCoperativeEdit({...cooperativeEdit,
        ContactPerson:  contactformValue.ContactPerson,
        PAddress:   contactformValue.address,
        PhNum:  contactformValue.contactnumber
      })
      props.setActive({
        tab1:false,
        tab2:false,
        tab3:true,
        tab4:false
      })
    }
  }, [formErrors]);

  const closePopup = (e)=>{
    e.preventDefault();
    setPopup(false);
    props.setActive({
      tab1:true,
      tab2:false,
      tab3:false,
      tab4:false
    })
    setContactFormvalue(contactFormInitailValue);
    setBasicFormvalue(basicformInitialValue);
    setlicenseformValue(licenseformValueInitialValue);
      
  }
  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    if (!values.contactnumber) {
      errors.contactnumber = "required";
    }
    else if(!values.contactnumber.length === 10){
       errors.contactnumber ="Please Enter Valid Number";
       }
    if (!values.address) {
      errors.address = "required";
    }

    if (!values.ContactPerson) {
      errors.ContactPerson = "required";
    }
 
    return errors;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
      <div className="col-lg-12 formposition  mb-3">
                <label htmlFor="Address" className="form-label">
                 Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value={contactformValue.address}
                  onChange={handleChange}
                  name="address"
                  placeholder="Address"
                  aria-label="Address"
                  id="Address"
                  aria-describedby="addon-wrapping"
                />            
                 <p className="errormsg errorpositon">{formErrors.address}</p>
          </div>
          <div className="col-lg-12  formposition mb-3">
                <label htmlFor="Contact Person" className="form-label">
                 Contact Person
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value={contactformValue.ContactPerson}
                  name="ContactPerson"
                  onChange={handleChange}
                  placeholder="Contact Person"
                  aria-label="ContactPerson"
                  id="ContactPerson"
                  aria-describedby="addon-wrapping"
                />   
                 <p className="errormsg errorpositon">{formErrors.ContactPerson}</p>         
          </div>
          </div>
          <div className="col-lg-6">
          <div className="col-lg-12 formposition mb-3">
                <label htmlFor="Contact Number" className="form-label">
                 Contact Number
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm mb-1"  
                  value={contactformValue.contactnumber}
                  onChange={handleChange}
                  name="contactnumber"
                  placeholder="Contact Number"
                  aria-label="ContactNumber"
                  id="ContactNumber"
                  aria-describedby="addon-wrapping"
                />            
                <p className="errormsg errorpositon">{formErrors.contactnumber}</p>         
          </div>
          </div>
      </div>
      <div className="p-2 basicALertfooter  mb-2"> 
      <button onClick={BasicformNext} className='btn btn-sm btn-cmpy ml-2 ' style={{background:"red"}}>Next</button>
      <button className='btn btn-sm btn-cmpy ml-2' onClick={closePopup}>Cancel</button>
    </div>
    </div>
  )
}

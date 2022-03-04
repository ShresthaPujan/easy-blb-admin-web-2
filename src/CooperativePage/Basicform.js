import React ,{useContext,useState, useEffect} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext';

export default function Basicform(props) {
  const context = useContext(cooperativeContext)
  const {basicformInitialValue,contactFormInitailValue,licenseformValueInitialValue
    ,setContactFormvalue,setBasicFormvalue,setlicenseformValue,BasicformValue,popup,setPopup,setCoperativeEdit,
    cooperativeEdit}=context;

    const [formErrors, setformErrors] = useState({ });
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
      const target = e.target;
      const name = target.name;
      const value = target.value;
      setBasicFormvalue({ ...BasicformValue, [name]: value });
    };
  const BasicformNext = (e)=>{
    console.log("here")
    e.preventDefault();
    setformErrors(validate(BasicformValue));
    setIsSubmit(true);

  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0  && isSubmit) {

      setCoperativeEdit({...cooperativeEdit,
        CbsURL:  BasicformValue.CbsURL,
        ColorCode:   BasicformValue.ColorCode,
        NickName:  BasicformValue.NickName,
        ScopeType:    BasicformValue.ScopeType,
        cooperaticecode:    BasicformValue.cooperaticecode,
        cooperativename: BasicformValue.cooperativename,
        logo: BasicformValue.logo
      })
      props.setActive({
        tab1:false,
        tab2:true,
        tab3:false,
        tab4:false
      })
    }
  }, [formErrors]);
  const closePopup = (e)=>{
    e.preventDefault();
    setContactFormvalue(contactFormInitailValue);
    setBasicFormvalue(basicformInitialValue);
    setlicenseformValue(licenseformValueInitialValue);
    setPopup(false);
  }
  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    if (!values.cooperaticecode) {
      errors.cooperaticecode = "required";
    }
    if (!values.cooperativename) {
      errors.cooperativename = "required";
    }

    if (!values.logo) {
      errors.logo = "required";
    }
 
    if (!values.NickName) {
      errors.NickName = "required";
    }
    if (!values.ColorCode) {
      errors.ColorCode = "required";
    }

    if (!values.ScopeType) {
      errors.ScopeType = "required";
    }
    if (!values.CbsURL) {
      errors.CbsURL = "required";
    }
    return errors;
  };

  return (
    <>
  <div className="container-fluid basicform">
    <div className="row">
        <div className="col-lg-6">
            <div className="col-lg-12 formposition mb-4">
        
                        <label htmlFor="cooperaticecode" className="form-label">
                        Cooperative Code
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm mb-1"  
                          value={BasicformValue.cooperaticecode}
                          onChange={handleChange}
                          name="cooperaticecode"
                          placeholder="Cooperative Code"
                          aria-label="Co Operative Code"
                          id="cooperaticecode"
                          aria-describedby="addon-wrapping"
                        />
                        <p className="errormsg errorpositon">{formErrors.cooperaticecode}</p>
                  </div>
                  <div className="col-lg-12 formposition mb-4">
          
          <label htmlFor="cooperativelogo" className="form-label">
            Cooperative logo
          </label>
          <input
            type="text"
            className="form-control form-control-sm mb-1"  
            onChange={handleChange}
            value={BasicformValue.logo}
            name="logo"
            placeholder="Cooperative Logo"
            aria-label="Co Operative Code"
            id="cooperativelogo"
            aria-describedby="addon-wrapping"
          />
        <p className="errormsg errorpositon">{formErrors.logo}</p>
    </div>
    <div className="col-lg-12 formposition mb-4">
          <label htmlFor="Alias" className="form-label">
            Alias
          </label>
          <input
            type="text"
            className="form-control form-control-sm mb-1"  
            onChange={handleChange}
            value={BasicformValue.NickName}
            name="NickName"
            placeholder="Alias"
            aria-label="Alias"
            id="Alias"
            aria-describedby="addon-wrapping"
          />   
           <p className="errormsg errorpositon">{formErrors.NickName}</p>   
    </div>
    <div className="col-lg-12 formposition mb-4">
                <label htmlFor="color" className="form-label">
                  Color Code
                </label>
                <input
                  type="color"
                  value={BasicformValue.ColorCode ? BasicformValue.ColorCode : "#000000"}
                  className="form-control form-control-sm mb-1" 
                  onChange={handleChange}
                  name="ColorCode"
                  placeholder="ColorCode"
                  aria-label="color"
                  id="color"
                  aria-describedby="addon-wrapping"
                />    
                   <p className="errormsg errorpositon">{formErrors.ColorCode}</p>           
          </div>
          </div>

       
      
        <div className="col-lg-6 ">
              <div className="col-lg-12 formposition mb-4">
                <label htmlFor="cooperativeName" className="form-label">
                  Cooperative Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value={BasicformValue.cooperativename}
                  onChange={handleChange}
                  name="cooperativename"
                  placeholder="Cooperative name"
                  aria-label="cooperativeName"
                  id="cooperativeName"
                  aria-describedby="addon-wrapping"
                />       
                     <p className="errormsg errorpositon">{formErrors.cooperativename}</p>         
          </div>
          <div className="col-lg-12 formposition mb-4">
                <label htmlFor="CBSurl" className="form-label">
                  CBS URL
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value={BasicformValue.CbsURL}
                  onChange={handleChange}
                  name="CbsURL"
                  placeholder="CBS URL"
                  aria-label="cooperativeName"
                  id="CbsURL"
                  aria-describedby="addon-wrapping"
                />
                <p className="errormsg errorpositon">{formErrors.CbsURL}</p>               
          </div>
          <div className="col-lg-12 formposition mb-4">
                <label htmlFor="Scopetype" className="form-label">
                  Scope Type
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value={BasicformValue.ScopeType}
                  onChange={handleChange} 
                  name="ScopeType"
                  placeholder="Scope Type"
                  aria-label="Scopetype"
                  id="Scopetype"
                  aria-describedby="addon-wrapping"
                />  
                  <p className="errormsg errorpositon">{formErrors.ScopeType}</p>              
          </div>
          </div>
       
    </div>
    

    
        </div>
        <div className="p-2 py-3  col-lg-12 basicALertfooter mb-4"> 
     
      <button onClick={BasicformNext} className='btn btn-sm btn-cmpy ml-2' style={{background:"red"}}>Next</button>
      <button className='btn btn-sm btn-cmpy ml-2' onClick={closePopup}>Cancel</button>
    </div>
</>

  )
}


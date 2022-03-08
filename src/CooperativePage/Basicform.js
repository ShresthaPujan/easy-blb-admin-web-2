import React ,{useContext,useState, useEffect} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext';
import $ from "jquery";

export default function Basicform(props) {
  const context = useContext(cooperativeContext)
  const {basicformInitialValue,contactFormInitailValue,licenseformValueInitialValue
    ,setContactFormvalue,setBasicFormvalue,setlicenseformValue,BasicformValue,popup,setPopup,setCoperativeEdit,
    cooperativeEdit, basicFormErrors, setBasicFormErrors, basicIsSubmit, setBasicIsSubmit}=context;

    // const [basicFormErrors, setformErrors] = useState({ });
    // const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
      const target = e.target;
      const name = target.name;
      const value = target.value;
      setBasicFormvalue({ ...BasicformValue, [name]: value });
    };
  const BasicformNext = (e)=>{
    console.log("here")
    e.preventDefault();
    setBasicFormErrors(validate(BasicformValue));
    setBasicIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(basicFormErrors).length === 0  && basicIsSubmit) {

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
  }, [basicFormErrors]);
  const closePopup = (e)=>{
    e.preventDefault();
    setContactFormvalue(contactFormInitailValue);
    setBasicFormvalue(basicformInitialValue);
    setlicenseformValue(licenseformValueInitialValue);
    $('.displayPopup').fadeOut(100);
    setPopup(false);
    props.setActive({
      tab1:true,
      tab2:false,
      tab3:false,
      tab4:false
    })
    setBasicFormErrors({});
    setBasicIsSubmit(false);
  }
  const validate = (values) => {
    const errors = {};
    const numv = /^[0-9]+$/i;
    if (!values.cooperaticecode) {
      errors.cooperaticecode = "Required";
    }
    if (!values.cooperativename) {
      errors.cooperativename = "Required";
    }

    if (!values.logo) {
      errors.logo = "Required";
    }
 
    if (!values.NickName) {
      errors.NickName = "Required";
    }
    if (!values.ColorCode) {
      errors.ColorCode = "Required";
    }

    if (!values.ScopeType) {
      errors.ScopeType = "Required";
    }
    if (!values.CbsURL) {
      errors.CbsURL = "Required";
    }
    return errors;
  };

  return (
    <>
  <div className="container-fluid basicform">
    <div className="row">
        <div className="col-lg-6">
            <div className="col-lg-12  mb-3">
        
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
                        <p className="errormsg ">{basicFormErrors.cooperaticecode}</p>
                  </div>
                  <div className="col-lg-12  mb-3">
          
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
        <p className="errormsg ">{basicFormErrors.logo}</p>
    </div>
    <div className="col-lg-12  mb-3">
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
           <p className="errormsg ">{basicFormErrors.NickName}</p>   
    </div>
    <div className="col-lg-12  mb-3">
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
                   <p className="errormsg ">{basicFormErrors.ColorCode}</p>           
          </div>
          </div>

       
      
        <div className="col-lg-6 ">
              <div className="col-lg-12  mb-3">
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
                     <p className="errormsg ">{basicFormErrors.cooperativename}</p>         
          </div>
          <div className="col-lg-12  mb-3">
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
                <p className="errormsg ">{basicFormErrors.CbsURL}</p>               
          </div>
          <div className="col-lg-12  mb-3">
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
                  <p className="errormsg ">{basicFormErrors.ScopeType}</p>              
          </div>
          </div>
       
    </div>
    

    
        </div>
        <div className="p-2 py-3  col-lg-12 basicALertfooter mb-3"> 
     
      <button onClick={BasicformNext} className='btn btn-sm btn-cmpy ml-2' style={{background:"red"}}>Next</button>
      <button className='btn btn-sm btn-cmpy ml-2' onClick={closePopup}>Cancel</button>
    </div>
</>

  )
}


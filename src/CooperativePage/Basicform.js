import React ,{useContext} from 'react'
import cooperativeContext from '../component/Cooperative/cooperativeContext';
export default function Basicform(props) {
  const context = useContext(cooperativeContext)
  const {popup,setPopup}=context;
  const BasicformNext = (e)=>{
    e.preventDefault();
    console.log("here")
    props.setActive({
      tab1:false,
      tab2:true,
      tab3:false,
      tab4:false
    })
  }
  const closePopup = (e)=>{
    e.preventDefault();
    setPopup(false);
  }
  return (
    <>
  <div className="container-fluid basicform">
    <div className="row">
        <div className="col-lg-6">
            <div className="col-lg-12 mb-3">
          
                        <label htmlFor="cooperaticecode" className="form-label">
                        Cooperative Code
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm mb-1"  
                          value=""
                          name="cooperaticecode"
                          placeholder="Cooperative Code"
                          aria-label="Co Operative Code"
                          id="cooperaticecode"
                          aria-describedby="addon-wrapping"
                        />
                    
                  </div>
                  <div className="col-lg-12  mb-3">
          
          <label htmlFor="cooperativelogo" className="form-label">
            Cooperative logo
          </label>
          <input
            type="text"
            className="form-control form-control-sm mb-1"  
            value=""
            name="cooperaticecode"
            placeholder="Cooperative Logo"
            aria-label="Co Operative Code"
            id="cooperativelogo"
            aria-describedby="addon-wrapping"
          />
      
    </div>
    <div className="col-lg-12  mb-3">
          <label htmlFor="Alias" className="form-label">
            Alias
          </label>
          <input
            type="text"
            className="form-control form-control-sm mb-1"  
            value=""
            name="cooperaticecode"
            placeholder="Alias"
            aria-label="Alias"
            id="Alias"
            aria-describedby="addon-wrapping"
          />      
    </div>
    <div className="col-lg-12 mb-3">
                <label htmlFor="color" className="form-label">
                  Scope Type
                </label>
                <input
                  type="color"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Scope Type"
                  aria-label="color"
                  id="color"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          </div>

       
      
        <div className="col-lg-6 pl-0">
              <div className="col-lg-12  mb-3">
                <label htmlFor="cooperativeName" className="form-label">
                  Cooperative Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Cooperative name"
                  aria-label="cooperativeName"
                  id="cooperativeName"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-12  mb-3">
                <label htmlFor="CBSurl" className="form-label">
                  CBS URL
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="CBS URL"
                  aria-label="cooperativeName"
                  id="CBSurl"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-12  mb-3">
                <label htmlFor="Scopetype" className="form-label">
                  Scope Type
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Scope Type"
                  aria-label="Scopetype"
                  id="Scopetype"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          </div>
       
    </div>
    

    
        </div>
        <div className="p-2  col-lg-12 basicALertfooter  mb-2"> 
      <button className='btn btn-sm btn-cmpy'>Submit</button>
      <button onClick={BasicformNext} className='btn btn-sm btn-cmpy ml-2' style={{background:"red"}}>Next</button>
      <button className='btn btn-sm btn-cmpy ml-2' onClick={closePopup}>Cancel</button>
    </div>
</>

  )
}


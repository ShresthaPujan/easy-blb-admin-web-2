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
          
          <label htmlFor="Fullname" className="form-label">
          Full Name
          </label>
          <input
            type="text"
            className="form-control form-control-sm mb-1"  
            value=""
            name="Fullname"
            placeholder="Full Name"
            aria-label="Fullname"
            id="Fullname"
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
                <label htmlFor="Email" className="form-label">
                Email
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name="Email"
                  placeholder="Email"
                  aria-label="Email"
                  id="Email"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          </div>

       
      
        <div className="col-lg-6 ">
              <div className="col-lg-12  mb-3">
                <label htmlFor="UserName" className="form-label">
                Username
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name="Username"
                  placeholder="Username"
                  aria-label="UserName"
                  id="UserName"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-12  mb-3">
                <label htmlFor="BranchID" className="form-label">
                Branch ID
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="CBS URL"
                  aria-label="BranchID"
                  id="BranchID"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-12  mb-3">
                <label htmlFor="IMEI_NUM" className="form-label">
                IMEI NUM
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="IMEI NUM"
                  aria-label="IMEI_NUM"
                  id="IMEI_NUM"
                  aria-describedby="addon-wrapping"
                />            
          </div>
          <div className="col-lg-12  mb-3">
                <label htmlFor="FatherName" className="form-label">
                Father Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mb-1"  
                  value=""
                  name=""
                  placeholder="Father Name"
                  aria-label="FatherName"
                  id="FatherName"
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


import React from 'react';

export default function Contenttable(props) {
    const {item,handleEdit,index} = props;
  return <tr>
      
                                                    
                                                               <td className='tc'>{index + 1}</td>
                                                                <td className="contentLogo tc"><img src={item.Logo}  alt="" /></td>
                                                                <td className='tc'>{item.CoOperativeCode}</td>
                                                                <td >{item.CoOperativeName}</td>                       
                                                                <td >{item.Address}</td>
                                                                <td> {item.NoOfUser}</td>
                                                                <td> {item.licenseExpiry}</td>
                                                                <td className='tc'> {item.CreditLimit}</td>
                                                                <td>{item.ContactNum}</td>
                                                                
                                                                <td><span className='editspan badge' onClick={()=>handleEdit(item)}>Edit</span> | <span className='deletespan badge '>Deactivate</span></td>                                                               
                                                           
  </tr>;
}

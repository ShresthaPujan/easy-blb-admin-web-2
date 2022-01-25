import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/Userslice';

export default function Protected(props) {
    let Cmp = props.Cmp
    let navigate = useNavigate();
   const user = useSelector(selectUser);
    useEffect(()=>{
        if (user.UserName == null){
            navigate("/login")
        }
        else{
            navigate("/dashboard")
        }
   },[])
    return (
        <div>
            <Cmp />
        </div>
    )
}

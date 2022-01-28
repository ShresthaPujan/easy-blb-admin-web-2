import React, {useState} from 'react';

const AuthContext = React.createContext({
 
    UserID:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
});

export const AuthContextProvider = (props) =>{
    const  initialToken = localStorage.getItem('token');
    const [UserID ,setUserID] = useState(initialToken)
    const userIsLoggedIn = !!UserID;
    
    const  loginHandler = (token) =>{
        setUserID(token);
        localStorage.setItem('token',token);
    };

    const logoutHandler = () =>{
        setUserID(null);
    }
    const contextValue ={
        UserID:UserID,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={contextValue}> {props.children}</AuthContext.Provider>;
};

export default AuthContext;
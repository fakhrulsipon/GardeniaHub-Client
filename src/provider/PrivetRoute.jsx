import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {loading, user} = use(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children
};

export default PrivetRoute;
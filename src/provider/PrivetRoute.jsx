import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const {loading, user} = use(AuthContext)
    const navigate = useNavigate()
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(!user){
        return navigate('/login')
    }
    return children
};

export default PrivetRoute;
import React, { use } from 'react';
import { AuthContext } from './AuthProvider';

const PrivetRoute = ({children}) => {
    const {loading} = use(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    return children
};

export default PrivetRoute;
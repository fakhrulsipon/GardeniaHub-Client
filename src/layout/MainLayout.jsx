import React from 'react';
import Nabbar from '../components/Nabbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
           <Nabbar></Nabbar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;
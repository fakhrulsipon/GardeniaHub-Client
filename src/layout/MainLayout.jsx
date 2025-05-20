
import Nabbar from '../components/Nabbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
           <Nabbar></Nabbar>
           <Outlet></Outlet>
           <Footer></Footer>

        </div>
    );
};

export default MainLayout;
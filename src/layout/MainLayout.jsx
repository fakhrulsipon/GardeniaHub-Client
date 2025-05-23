
import Nabbar from '../components/Nabbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
           <Nabbar></Nabbar>
           <section className='w-11/12 mx-auto mt-10'>
            <Outlet></Outlet>
           </section>
           <Footer></Footer>

        </div>
    );
};

export default MainLayout;
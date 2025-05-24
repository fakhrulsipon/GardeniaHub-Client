import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import ThemeToggle from '../provider/ThemeToggle';



const Nabbar = () => {
  const { signOutUser, user } = use(AuthContext);
  

  // 🔗 Common NavLink Style
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-700 font-bold underline underline-offset-6 dark:text-emerald-400"
      : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-emerald-300 transition duration-200";

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Congratulations!",
          text: "You have successfully logged out",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      });
  };

  return (
    
    <div className="navbar sticky top-0 z-50  bg-green-50 dark:bg-gray-900 text-green-900 dark:text-white shadow-md px-4 md:px-8 lg:px-20 py-2">
      {/* Start */}
       <h1 className="text-2xl hidden md:hidden font-bold text-green-800 hover:text-green-600 transition-all duration-300">
          🌱 GardeniaHub
        </h1>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li><NavLink to='/' className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to='/exploreGardeners' className={navLinkStyle}>Explore Gardeners</NavLink></li>
            <li><NavLink to='/browseTips' className={navLinkStyle}>Browse Tips</NavLink></li>
            {
              user && <>
              
              <li><NavLink to='/shareTip' className={navLinkStyle}>Share a Garden Tip</NavLink></li>
            <li><NavLink to='/myTips' className={navLinkStyle}>My Tips</NavLink></li>
              
              </>
            }
          </ul>
        </div>
        <a className="text-2xl hidden md:block font-bold text-green-800 hover:text-green-600 transition-all duration-300">
          🌱 GardeniaHub
        </a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-4">
          <li><NavLink to='/' className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to='/exploreGardeners' className={navLinkStyle}>Explore Gardeners</NavLink></li>
          <li><NavLink to='/browseTips' className={navLinkStyle}>Browse Tips</NavLink></li>
          {
            user && <>
            
            <li><NavLink to='/shareTip' className={navLinkStyle}>Share a Garden Tip</NavLink></li>
          <li><NavLink to='/myTips' className={navLinkStyle}>My Tips</NavLink></li>
            </>
          }
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button"
               className="tooltip tooltip-left" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-green-500 cursor-pointer"
              />
            </div>
            <ul className="menu menu-sm  dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-40">
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-green-600 text-white hover:bg-green-700 w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-md bg-green-600 text-white hover:bg-green-700">Login</Link>
        )}

       <ThemeToggle></ThemeToggle>
      </div>
    </div>

  
  );
};

export default Nabbar;

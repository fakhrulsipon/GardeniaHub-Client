
import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { signOutUser } = use(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successful!",
          text: "Welcome back to the Garden Hub 🌿",
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
      })
  }
  return (
    <div className="navbar bg-green-50 text-green-900 shadow-md px-4 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><a>Explore Gardeners</a></li>
            <li><a>Browse Tips</a></li>
            <li><a>Share a Garden Tip</a></li>
            <li><a>My Tips</a></li>
          </ul>
        </div>
        <a className="text-2xl font-bold text-green-800 hover:text-green-600 transition-all duration-300">
          🌱 GardeniaHub
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-2">
          <li><NavLink className="hover:text-green-600 transition">Home</NavLink></li>
          <li><a className="hover:text-green-600 transition">Explore Gardeners</a></li>
          <li><a className="hover:text-green-600 transition">Browse Tips</a></li>
          <li><a className="hover:text-green-600 transition">Share a Garden Tip</a></li>
          <li><a className="hover:text-green-600 transition">My Tips</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link onClick={handleLogout} to='/login' className="btn btn-md bg-green-600 text-white hover:bg-green-700">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;

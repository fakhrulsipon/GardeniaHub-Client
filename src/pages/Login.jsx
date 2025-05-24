
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { loginUser, googleUser } = use(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(true)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    loginUser(email, password)
      .then(res => {
        if (res.user) {
          Swal.fire({
            title: "Congratulations!",
            text: "You have successfully Login With Google",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          });
          navigate(location.state || '/')
        }
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

  const handleGoogle = () => {
    googleUser()
      .then(res => {
        if (res.user) {
          Swal.fire({
            title: "Congratulations!",
            text: "You have successfully Login With Google",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          });
          navigate(location.state || '/')
        }

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
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="max-w-md mx-auto mt-12 p-6 shadow-lg rounded-xl bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100"
            required
          />
          <div className='relative'>
            <input
              type={show ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100"
              required
            />
            <button onClick={() => { setShow(!show) }} style={{ zIndex: 10 }} className='btn btn-xs absolute bottom-2 right-6'>{show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}</button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="mt-4 w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100"
        >
          <FcGoogle size={22} />
          <span className="font-medium">Continue with Google</span>
        </button>

        <p className="mt-4 text-center text-gray-700 dark:text-gray-200">
          Don’t have an account?{" "}
          <Link to="/signin" className="text-green-600 font-semibold dark:text-green-400">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from '../provider/AuthProvider';
import { use, useState } from 'react';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { signInUser, googleUser, updateProfileUser, setUser } = use(AuthContext);
  const [showError, setErrorShow] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password)

    setErrorShow('')

    if (password.length < 8) {
      setErrorShow('Password must be at least 8 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorShow('Password must contain at least one uppercase letter.');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorShow('Password must contain at least one lowercase letter.');
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorShow('Password must contain at least one special character.');
      return;
    }

      signInUser(email, password)
        .then(res => {
          
          const updateUser = { displayName: name, photoURL: photo }
          updateProfileUser(updateUser)
            .then(() => {
              setUser({ ...res.user, displayName: name, photoURL: photo })
              Swal.fire({
                title: "Congratulations!",
                text: "You have successfully Register in.",
                icon: "success",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
              });
              navigate(location.state || '/')
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
    }

    const handleGoogle = () => {
      googleUser()
        .then(res => {
          console.log(res.user)
          Swal.fire({
            title: "Congratulations!",
            text: "You have successfully Login With Google",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          });
          navigate(location.state || '/')
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
      <div className="max-w-md mx-auto mt-12 p-6 shadow-lg rounded-xl bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">SignIn</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            name='name'
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="text"
            placeholder="Photo URL"
            name='photo'
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            name='email'
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="password"
            name='password'
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
          {
            showError && <p className='text-red-600'>{showError}</p>
          }
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            SignIn
          </button>
        </form>

        <button onClick={handleGoogle}
          className="mt-4 w-full border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-200"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">Continue with Google</span>
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold">
            Login here
          </Link>
        </p>
      </div>
    );
  };

  export default SignIn;
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { signInUser, googleUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password)

    signInUser(email, password)
      .then(res => {
        console.log(res.user);
        Swal.fire({
          title: "SignIn Successful!",
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
      });
  }

  const handleGoogle = () => {
    googleUser()
      .then(res => {
        console.log(res.user)
        Swal.fire({
          title: "SignIn Google Successful!",
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
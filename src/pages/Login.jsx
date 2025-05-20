
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {loginUser} = use(AuthContext)

  const handleLogin = (e) => {
    e.prventDefault()
  }
    return (
        <div className="max-w-md mx-auto mt-12 p-6 shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form  className="space-y-4">
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
          Login
        </button>
      </form>

     <button
  className="mt-4 w-full border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-200"
>
  <FcGoogle size={22} />
  <span className="font-medium text-gray-700">Continue with Google</span>
</button>

      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/signin" className="text-green-600 font-semibold">
          Register here
        </Link>
      </p>
    </div>
    );
};

export default Login;
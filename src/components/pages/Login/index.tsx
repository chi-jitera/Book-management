import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#194cc9]">
      <form className="flex flex-col w-full max-w-sm p-8 rounded-md">
        <div className="flex flex-col gap-4 mb-8">
          {/* Username */}
          <div className="flex items-center border border-white rounded-md px-4 py-2 bg-transparent text-white">
            <FaUser className="mr-3 text-white" />
            <input
              type="text"
              placeholder="USERNAME"
              className="flex-1 bg-transparent outline-none placeholder-white text-white"
            />
          </div>
          {/* Password */}
          <div className="flex items-center border border-white rounded-md px-4 py-2 bg-transparent text-white">
            <FaLock className="mr-3 text-white" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="flex-1 bg-transparent outline-none placeholder-white text-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-white text-[#194cc9] font-semibold py-3 rounded-md mb-2 w-full transition-colors duration-150 hover:bg-gray-100"
        >
          LOGIN
        </button>
        <div className="text-center mt-2">
          <a href="#" className="text-white underline text-sm hover:text-gray-300">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
import React from "react";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1D47C7]">
      <div className="w-full max-w-md flex flex-col items-center">
        <form className="w-full flex flex-col items-center space-y-4">
          <div className="w-full flex items-center border border-white rounded-md px-4 py-3 bg-transparent text-white">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
            <input
              type="text"
              placeholder="USERNAME"
              className="bg-transparent w-full outline-none text-white placeholder-white"
            />
          </div>
          <div className="w-full flex items-center border border-white rounded-md px-4 py-3 bg-transparent text-white">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v4M6 21h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zm6-14a4 4 0 0 0-8 0" />
            </svg>
            <input
              type="password"
              placeholder="PASSWORD"
              className="bg-transparent w-full outline-none text-white placeholder-white"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-white text-[#1D47C7] rounded-md py-3 font-semibold text-lg hover:bg-[#e0e0e0] transition"
          >
            LOGIN
          </button>
        </form>
        <div className="w-full text-center mt-4">
          <a href="#" className="text-white text-sm hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
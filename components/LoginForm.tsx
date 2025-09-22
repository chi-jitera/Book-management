import React from "react";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#164fc7]">
      <div className="w-full max-w-sm">
        <form className="flex flex-col items-center">
          <div className="w-full mb-4">
            <div className="flex items-center border border-white rounded-lg px-4 py-2">
              <svg className="text-white w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M5.121 17.804A4 4 0 0 1 9 15h6a4 4 0 0 1 3.879 2.804M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <input
                type="text"
                placeholder="USERNAME"
                className="bg-transparent outline-none text-white w-full placeholder-white"
              />
            </div>
          </div>
          <div className="w-full mb-6">
            <div className="flex items-center border border-white rounded-lg px-4 py-2">
              <svg className="text-white w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 17v.01M6.58 13.014A4.993 4.993 0 0 1 12 15c1.379 0 2.636-.556 3.58-1.464m2.42-3.164V7a6 6 0 1 0-12 0v4.388C3.29 12.847 2 14.737 2 16.8c0 2.614 2.465 3.2 5.5 3.2s5.5-.586 5.5-3.2c0-2.063-1.292-3.953-3-5.412Z" />
              </svg>
              <input
                type="password"
                placeholder="PASSWORD"
                className="bg-transparent outline-none text-white w-full placeholder-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-white rounded-lg text-[#164fc7] font-semibold mb-3 transition duration-200 hover:bg-gray-100"
          >
            LOGIN
          </button>
          <div className="w-full flex justify-center">
            <a href="#" className="text-white text-sm hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
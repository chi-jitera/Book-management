import React from 'react';

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-[#1E48CC] flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <form className="flex flex-col gap-4 w-full max-w-md">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-70">
              {/* User Icon (Heroicons or SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8.001 8.001 0 0112 16a8.001 8.001 0 016.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full pl-12 pr-4 py-2 rounded border border-white bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-70">
              {/* Lock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11V7a4 4 0 10-8 0v4M8 11a4 4 0 008 0V7a4 4 0 10-8 0v4M12 11v6m0 0h3m-3 0H9" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full pl-12 pr-4 py-2 rounded border border-white bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-1 w-full bg-white text-[#1E48CC] font-semibold py-2 rounded transition hover:bg-gray-100"
          >
            LOGIN
          </button>
        </form>
        <div className="mt-4">
          <a href="#" className="text-white text-opacity-90 font-medium hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
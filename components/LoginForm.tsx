import React from "react";

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-blue-700 flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center">
        <form className="flex flex-col gap-5 w-full px-8">
          <div className="border border-white rounded-md flex items-center px-4 h-12 text-white focus-within:border-white">
            <svg
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5.121 17.804A6 6 0 1118 13" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              placeholder="USERNAME"
              className="bg-transparent outline-none border-none flex-1 text-white placeholder-white"
            />
          </div>
          <div className="border border-white rounded-md flex items-center px-4 h-12 text-white focus-within:border-white">
            <svg
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 17v1m0-1V7m0 0c1.104 0 2 .896 2 2v6a2 2 0 01-2 2zm0 0a2 2 0 11-4 0v-6a2 2 0 014 0zm0 0v10M6 21h12" />
            </svg>
            <input
              type="password"
              placeholder="PASSWORD"
              className="bg-transparent outline-none border-none flex-1 text-white placeholder-white"
            />
          </div>
          <button
            type="submit"
            className="mt-7 h-12 bg-white text-blue-700 font-semibold rounded-md w-full transition hover:bg-blue-100"
          >
            LOGIN
          </button>
        </form>
        <div className="mt-4 text-white text-center w-full">
          <a
            href="#"
            className="text-white underline hover:text-blue-200 text-base"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
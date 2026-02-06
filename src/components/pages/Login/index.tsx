import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="min-h-screen w-full bg-[#1f4fcf] flex items-center justify-center px-6 py-10">
      <form className="w-full max-w-[360px]">
        <div className="flex flex-col items-center gap-4">
          {/* Username */}
          <div className="w-[265px] h-[42px] flex items-center rounded border border-white/70 px-4 text-white">
            <FaUser className="mr-3 text-white/80" size={14} />
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full bg-transparent outline-none text-[12px] tracking-wider placeholder:text-white/70"
            />
          </div>

          {/* Password */}
          <div className="w-[265px] h-[42px] flex items-center rounded border border-white/70 px-4 text-white">
            <FaLock className="mr-3 text-white/80" size={14} />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full bg-transparent outline-none text-[12px] tracking-wider placeholder:text-white/70"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="mt-6 w-[265px] h-[46px] rounded bg-white text-[#1f4fcf] font-semibold tracking-wide shadow-[0_6px_14px_rgba(0,0,0,0.18)] transition-colors hover:bg-white/95"
          >
            LOGIN
          </button>

          {/* Forgot password */}
          <div className="w-[265px] mt-1 text-right">
            <a
              href="#"
              className="text-white/90 text-[12px] hover:text-white"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
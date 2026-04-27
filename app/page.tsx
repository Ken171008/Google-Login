import React from 'react';

export default function GoogleLoginResponsive() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] md:bg-[#F0F2F5] flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      
      {/* Main Container: Mobile is full width/simple, Desktop is wide/split */}
      <div className="bg-white rounded-2xl md:rounded-[28px] shadow-sm md:shadow-none border border-gray-200 md:border-gray-300 w-full max-w-[450px] md:max-w-[1040px] flex flex-col md:flex-row overflow-hidden min-h-[500px] md:min-h-[560px]">
        
        {/* Left Section: Branding & Header */}
        <div className="flex-1 p-6 md:p-12 flex flex-col items-start">
          <div className="mb-4 md:mb-6">
            <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <h1 className="text-3xl md:text-[40px] font-normal text-[#1f1f1f] mb-3 md:mb-4 tracking-tight">
            Sign in
          </h1>
          <p className="text-base md:text-lg text-[#1f1f1f]">
            Use your Google Account
          </p>
        </div>

        {/* Right Section: Interactive Form */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Input with Floating Label */}
            <div className="relative group mt-2">
              <input
                type="text"
                id="email"
                className="block w-full px-4 py-4 text-base text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 peer transition-all"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-base text-gray-500 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none"
              >
                Email or phone
              </label>
            </div>

            <button className="text-[#0b57d0] font-medium text-sm hover:bg-blue-50 px-2 py-1.5 rounded transition-colors -ml-2">
              Forgot email?
            </button>

            <div className="pt-4 md:pt-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                Not your computer? Use Guest mode to sign in privately.{' '}
                <a href="#" className="text-[#0b57d0] font-semibold hover:underline">
                  Learn more about using Guest mode
                </a>
              </p>
            </div>
          </div>

          {/* Action Buttons: Stacked on tiny screens, inline on larger */}
          <div className="flex flex-row items-center justify-between mt-12 md:mt-0">
            <button className="text-[#0b57d0] font-semibold text-sm hover:bg-blue-50 px-4 py-2.5 rounded-full transition-colors">
              Create account
            </button>
            <button className="bg-[#0b57d0] hover:bg-[#0842a0] text-white font-medium py-2.5 px-6 rounded-full transition-all shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <div className="w-full max-w-[450px] md:max-w-[1040px] mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0 px-2">
        <div className="order-2 md:order-1">
          <select className="bg-transparent focus:outline-none cursor-pointer hover:bg-gray-200 p-2 rounded transition-colors">
            <option>English (United States)</option>
            <option>Filipino</option>
          </select>
        </div>
        <div className="space-x-6 order-1 md:order-2">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  );
}
import React from 'react'
import AdminImage from '../../assets/AdminImage.png'

function SignUpAds() {
  return (
   <div className="py-10 px-5">
      <div className="max-w-5xl mx-auto h-96 flex items-end gap-10 bg-gradient-to-br from-blue-600 to-blue-700  p-16 overflow-hidden relative"
       style={{
    clipPath: 'polygon(120px 0, 100% 0, 100% calc(100% - 70px), calc(100% - 120px) 100%, 0 100%, 0 70px)',
  }}>
        {/* Left Content */}
        <div className="flex-2 flex flex-col justify-end text-white z-10">
          <h1 className="text-5xl font-bold leading-tight mb-5">Start posting jobs today</h1>
          <p className="text-base font-normal mb-8 opacity-95">Start posting jobs for only $10.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-sm cursor-pointer w-fit transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
            Sign Up For Free
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-3 flex items-center justify-center relative z-10 translate-y-16">
          <img
            src={AdminImage}
            alt="Dashboard preview"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default SignUpAds


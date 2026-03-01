import React from 'react'

function Header() {
  return (
    <header className="bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              Q
            </div>
            <span className="text-xl font-bold text-gray-900 mr-8">QuickHire</span>

             <nav className="hidden md:flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Find Jobs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Browse Companies
            </a>
          </nav>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-8 items-center">
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Login
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              Q
            </div>
            <span className="text-xl font-bold text-gray-900">QuickHire</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 absolute left-96 transform -translate-x-1/2">
            <Link to="/jobs" className="text-gray-600 hover:text-gray-900 font-medium">
              Find Jobs
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Browse Companies
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 font-medium rounded">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center focus:outline-none"
          >
            <span className={`w-6 h-0.5 bg-gray-900 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-300 pt-4 flex flex-col gap-4">
            <Link
              to="/jobs"
              className="text-gray-600 hover:text-gray-900 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              Browse Companies
            </a>
            <div className="border-t border-gray-300 pt-4 flex flex-col gap-3">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 font-medium rounded text-center">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

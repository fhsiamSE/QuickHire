import React, { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
  }

  const aboutLinks = [
    { label: 'Companies', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Advice', href: '#' },
    { label: 'Privacy Policy', href: '#' }
  ]

  const resourcesLinks = [
    { label: 'Help Docs', href: '#' },
    { label: 'Guide', href: '#' },
    { label: 'Updates', href: '#' },
    { label: 'Contact Us', href: '#' }
  ]

  const socialLinks = [
    { icon: 'f', label: 'Facebook' },
    { icon: 'in', label: 'Instagram' },
    { icon: 'g', label: 'Google' },
    { icon: 'in', label: 'LinkedIn' },
    { icon: 'x', label: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 border-b border-gray-800">
        <div className="grid xl:grid-cols-4 xl:gap-12 grid-cols-1">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                Q
              </div>
              <h3 className="text-lg font-bold">QuickHire</h3>
            </div>
            <p className="text-gray-400 text-md leading-relaxed">
              Great platform for the job seeker that passionate about startup. Find your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-gray-200">About</h4>
            <ul className="flex flex-col gap-3">
              {aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-md hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold text-gray-200">Resources</h4>
            <ul className="flex flex-col gap-3">
              {resourcesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-md hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */} 
          <div className="flex flex-col gap-4 ">
            <h4 className="text-xl font-semibold text-gray-200">Get job notifications</h4>
            <p className="text-gray-400 text-md">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 bg-white text-gray-900 rounded text-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded font-medium text-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center flex-col gap-4  xl:flex-row">
        <p className="text-gray-500 text-md">
          2021 © QuickHire. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-colors"
              title={social.label}
            >
              <span className="text-xs font-semibold">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

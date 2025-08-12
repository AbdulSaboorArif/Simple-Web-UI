'use client'

import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [activeLink, setActiveLink] = useState('Products')

  const navLinks = [
    'Home',
    'Products',
    'Pricing',
    'Clients',
    'Resources',
    'Documentation',
    'Enterprise'
  ]

  return (
    <header className="relative z-20 px-6 py-4 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <span className='text-autoflow-purple'>Auto</span>
            <Image src="/Logo.png" alt="Logo" width={20} height={20} />
            <span className='text-autoflow-purple'>Flow</span>
          </div>
          <div className="w-6 h-6 bg-autoflow-purple rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-8 px-8 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`nav-link text-sm font-medium ${
                  activeLink === link ? 'active' : ''
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </nav>

        {/* Login Button */}
        <button className="btn-primary text-sm px-6 py-2 bg-[#1C166E]">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header

'use client'

import { Inter, Montez } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  const [activeLink, setActiveLink] = useState('Products')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    'Home',
    'Products',
    'Pricing',
    'Clients',
    'Resources',
    'Documentation',
    'Enterprise'
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="relative z-20 px-6 py-4 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className={`${inter.className} text-2xl font-bold text-white flex items-center gap-2`}>
            <span className='text-autoflow-purple'>Auto</span>
            <Image src="/Logo.png" alt="Logo" width={20} height={20} />
            <span className={`${inter.className} text-autoflow-purple`}>Flow</span>
          </div>
          <div className="w-6 h-6 bg-autoflow-purple rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className=" text-white hidden lg:flex items-center space-x-8 ">
          <div className={`${inter.className} flex items-center space-x-8 px-8 py-4 border border-white/20 rounded-full`}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`nav-link text-sm font-medium ${
                  activeLink === link ? 'active' : ''
                }`
              }
              >
                {link}
              </button>
            ))}
          </div>
        </nav>

        {/* Login Button */}
        <button className={`${inter.className} btn-primary text-sm px-6 py-2 bg-[#1C166E]`}>
          Login
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/20 mt-2">
          <nav className={`${inter.className} px-6 py-4`}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setActiveLink(link)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`nav-link text-sm font-medium text-white text-left py-2 px-4 rounded-lg transition-colors ${
                    activeLink === link 
                      ? 'bg-autoflow-purple/20 text-autoflow-purple' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

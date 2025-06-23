import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-navy-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <span className="text-xl font-bold text-navy-900">SailAgency</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-navy-600 font-medium transition-colors"
            >
              Dịch vụ
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-navy-600 font-medium transition-colors"
            >
              Giá cả
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-navy-600 font-medium transition-colors"
            >
              Câu hỏi thường gặp
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-navy-600 font-medium transition-colors"
            >
              Liên hệ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Bắt đầu ngay
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-navy-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md"
              >
                Dịch vụ
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md"
              >
                Giá cả
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md"
              >
                Câu hỏi thường gặp
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md"
              >
                Liên hệ
              </button>
              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary"
                >
                  Bắt đầu ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
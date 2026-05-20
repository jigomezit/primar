'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from '@/utils/scrollToSection'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', id: 'home' },
    // { label: 'Proyectos', id: 'proyectos' }, // Se usará a futuro
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Blog', id: 'blog' },
    { label: 'Servicios', id: 'servicios' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/images/logo.png" 
              alt="PRIMAR Logo" 
              className={`h-[62px] md:h-[74px] w-auto transition-all duration-300 ${
                isScrolled ? 'brightness-0' : ''
              }`}
            />
          </motion.a>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`font-poppins font-medium transition-colors cursor-pointer ${
                  isScrolled 
                    ? 'text-black hover:text-gray-600' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={isScrolled ? 'text-black' : 'text-white'}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}


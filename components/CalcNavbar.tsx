'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  variant?: 'dark' | 'light' | 'transparent'
}

export default function CalcNavbar({ variant = 'transparent' }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const menuItems = [
    { label: 'Home', href: '/#home' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Servicios', href: '/#servicios' },
  ]

  const onLight = variant === 'light' || isScrolled || isOpen
  const bgClass = isOpen
    ? 'bg-white shadow-md'
    : variant === 'transparent'
    ? isScrolled
      ? 'bg-white shadow-md'
      : 'bg-transparent'
    : variant === 'light'
    ? 'bg-white shadow-sm'
    : 'bg-black'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center cursor-pointer">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              src="/images/logo.png"
              alt="PRIMAR Logo"
              className={`h-[62px] md:h-[74px] w-auto transition-all duration-300 ${
                onLight ? 'brightness-0' : ''
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className={`relative font-inter font-medium cursor-pointer group ${
                    onLight ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-[1.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      onLight ? 'bg-black' : 'bg-white'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.08 }}
            >
              <Link
                href="/calculadora"
                className={`inline-flex items-center font-inter font-medium px-5 py-2 rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                  onLight
                    ? 'border-black text-black hover:bg-black hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                Calculadora
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden">
            <motion.button
              type="button"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              className={`relative w-10 h-10 flex items-center justify-center ${
                onLight ? 'text-black' : 'text-white'
              }`}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                className="absolute w-6 h-[2px] bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute w-6 h-[2px] bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                className="absolute w-6 h-[2px] bg-current rounded-full"
              />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-black/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-inter font-medium text-[18px] text-black py-3 px-3 rounded-lg hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + menuItems.length * 0.05 }}
                className="pt-3 mt-2 border-t border-black/10"
              >
                <Link
                  href="/calculadora"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between font-inter font-medium text-[17px] bg-black text-white px-4 py-3 rounded-full hover:bg-black/85 transition-colors"
                >
                  <span>Calculadora de gastos</span>
                  <span className="font-mono text-sm">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

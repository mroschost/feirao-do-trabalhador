import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'O que oferecemos', href: '#services' },
  { label: 'Programação', href: '#programming' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2D3966] shadow-lg' : 'bg-[#2D3966]/90'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="/assets/logo_feirao.png"
              alt="Feirão do Trabalhador"
              className="h-18 md:h-24"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-medium text-sm hover:text-[#F3E844] transition-colors duration-200"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2D3966] border-t border-white/10"
          >
            <div className="w-full max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium py-2 hover:text-[#F3E844] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

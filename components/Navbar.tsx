'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Replace with your icon file: import Icon from '@/public/icon.png' */}
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SN</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Spotnearr
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</Link>
            <Link href="/help" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Help</Link>
            <a href="#download" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
              Launching Soon
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
              <Link href="/help" className="text-gray-700 hover:text-green-600 font-medium">Help</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 font-medium">Terms</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// src/components/Footer.tsx
'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 block">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xs">SN</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                Spotnearr
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Discover local shops, services and exclusive offers around you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-green-400 text-sm transition-colors">About</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Help</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📧 spotnearr@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Spotnearr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">Terms</Link>
            <Link href="/help" className="hover:text-green-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

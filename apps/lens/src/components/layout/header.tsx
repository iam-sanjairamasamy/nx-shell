'use client'

import { useEffect, useState } from 'react'
import { Library, User, LogOut } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@nx-shell/components'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? 'shadow-md border-b border-gray-200' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-20' : 'h-32'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div
              className={`py-2 transition-all duration-300 ${
                isScrolled ? 'py-2' : 'py-3'
              }`}
            >
              <Library
                className={`text-black transition-all duration-300 ${
                  isScrolled ? 'h-5 w-5' : 'h-7 w-7'
                }`}
              />
            </div>
            <h1
              className={`text-black font-medium transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-2xl'
              }`}
            >
              Lens 
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-black font-normal">Home</a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-11 h-11 bg-gray-200 border rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 text-sm font-normal">U</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                  <User className="h-6 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
                  <LogOut className="h-6 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}

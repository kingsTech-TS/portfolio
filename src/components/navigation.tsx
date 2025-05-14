"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RetroGlitch } from "@/components/retro-glitch"
import { useTransition } from "@/components/page-transition"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { isTransitioning } = useTransition()

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-indigo-950/90" : "bg-indigo-950/80"
      } backdrop-blur-sm border-b border-cyan-500/30`}
    >
      <div className="container flex items-center justify-between h-14 px-4 mx-auto max-w-7xl sm:h-16">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <RetroGlitch>
            <span className="text-lg font-bold text-cyan-400 font-pixel sm:text-xl">&lt;DEV/&gt;</span>
          </RetroGlitch>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <Link
            href="/"
            className={`text-xs font-medium transition-colors font-pixel sm:text-sm ${
              isActive("/") ? "text-pink-400" : "text-gray-300 hover:text-pink-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`text-xs font-medium transition-colors font-pixel sm:text-sm ${
              isActive("/about") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`text-xs font-medium transition-colors font-pixel sm:text-sm ${
              isActive("/projects") ? "text-green-400" : "text-gray-300 hover:text-green-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`text-xs font-medium transition-colors font-pixel sm:text-sm ${
              isActive("/contact") ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            CONTACT
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-300 hover:text-white hover:bg-transparent"
          onClick={toggleMenu}
          disabled={isTransitioning}
        >
          {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16 bg-indigo-950/95 md:hidden">
          <nav className="flex flex-col items-center justify-center flex-1 space-y-6 sm:space-y-8">
            <Link
              href="/"
              className={`flex items-center text-lg font-medium text-gray-300 transition-colors hover:text-pink-400 font-pixel sm:text-xl ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <Home className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              HOME
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-lg font-medium text-gray-300 transition-colors hover:text-yellow-400 font-pixel sm:text-xl ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <User className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              ABOUT
            </Link>
            <Link
              href="/projects"
              className={`flex items-center text-lg font-medium text-gray-300 transition-colors hover:text-green-400 font-pixel sm:text-xl ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className={`flex items-center text-lg font-medium text-gray-300 transition-colors hover:text-cyan-400 font-pixel sm:text-xl ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <Mail className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

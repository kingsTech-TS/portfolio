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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isTransitioning } = useTransition()

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "bg-indigo-950/90" : "bg-indigo-950/80"
        } backdrop-blur-sm border-b border-cyan-500/30`}
      >
        <div className="container flex items-center justify-between h-14 px-4 mx-auto sm:h-16">
          <Link href="/" className="flex items-center z-[101]" onClick={closeMenu} style={{ minHeight: "unset" }}>
            <RetroGlitch>
              <span className="text-base font-bold text-cyan-400 font-pixel xs:text-lg sm:text-xl">&lt;DEV/&gt;</span>
            </RetroGlitch>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <Link
              href="/"
              className={`py-2 text-xs lg:text-sm font-medium transition-colors font-pixel ${
                isActive("/") ? "text-pink-400" : "text-gray-300 hover:text-pink-400"
              } ${isTransitioning ? "pointer-events-none" : ""}`}
              style={{ minHeight: "unset" }}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`py-2 text-xs lg:text-sm font-medium transition-colors font-pixel ${
                isActive("/about") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
              } ${isTransitioning ? "pointer-events-none" : ""}`}
              style={{ minHeight: "unset" }}
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className={`py-2 text-xs lg:text-sm font-medium transition-colors font-pixel ${
                isActive("/projects") ? "text-green-400" : "text-gray-300 hover:text-green-400"
              } ${isTransitioning ? "pointer-events-none" : ""}`}
              style={{ minHeight: "unset" }}
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className={`py-2 text-xs lg:text-sm font-medium transition-colors font-pixel ${
                isActive("/contact") ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              } ${isTransitioning ? "pointer-events-none" : ""}`}
              style={{ minHeight: "unset" }}
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-white hover:bg-transparent z-[101] p-1"
            onClick={toggleMenu}
            disabled={isTransitioning}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{ minHeight: "unset", minWidth: "unset" }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Separate from header for better z-index control */}
      <div
        className={`fixed inset-0 bg-indigo-950/95 z-[99] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16">
          <nav className="flex flex-col items-start space-y-6 sm:space-y-8">
            <Link
              href="/"
              className={`flex items-center text-base sm:text-lg font-medium transition-colors font-pixel ${
                isActive("/") ? "text-pink-400" : "text-gray-300 hover:text-pink-400"
              }`}
              onClick={closeMenu}
              style={{ minHeight: "unset" }}
            >
              <Home className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              HOME
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-base sm:text-lg font-medium transition-colors font-pixel ${
                isActive("/about") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
              }`}
              onClick={closeMenu}
              style={{ minHeight: "unset" }}
            >
              <User className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              ABOUT
            </Link>
            <Link
              href="/projects"
              className={`flex items-center text-base sm:text-lg font-medium transition-colors font-pixel ${
                isActive("/projects") ? "text-green-400" : "text-gray-300 hover:text-green-400"
              }`}
              onClick={closeMenu}
              style={{ minHeight: "unset" }}
            >
              <Code className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className={`flex items-center text-base sm:text-lg font-medium transition-colors font-pixel ${
                isActive("/contact") ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={closeMenu}
              style={{ minHeight: "unset" }}
            >
              <Mail className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

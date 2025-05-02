"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RetroGlitch } from "@/components/retro-glitch"
import { useTransition } from "./page-transition"


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isTransitioning } = useTransition()

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/80 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <RetroGlitch>
            <span className="text-xl font-bold text-cyan-400 font-pixel">&lt;DEV/&gt;</span>
          </RetroGlitch>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors font-pixel ${
              isActive("/") ? "text-pink-400" : "text-gray-300 hover:text-pink-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors font-pixel ${
              isActive("/about") ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors font-pixel ${
              isActive("/projects") ? "text-green-400" : "text-gray-300 hover:text-green-400"
            } ${isTransitioning ? "pointer-events-none" : ""}`}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors font-pixel ${
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
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16 bg-indigo-950/95 md:hidden">
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            <Link
              href="/"
              className={`flex items-center text-xl font-medium text-gray-300 transition-colors hover:text-pink-400 font-pixel ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <Home className="w-5 h-5 mr-2" />
              HOME
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-xl font-medium text-gray-300 transition-colors hover:text-yellow-400 font-pixel ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <User className="w-5 h-5 mr-2" />
              ABOUT
            </Link>
            <Link
              href="/projects"
              className={`flex items-center text-xl font-medium text-gray-300 transition-colors hover:text-green-400 font-pixel ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <Code className="w-5 h-5 mr-2" />
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className={`flex items-center text-xl font-medium text-gray-300 transition-colors hover:text-cyan-400 font-pixel ${
                isTransitioning ? "pointer-events-none" : ""
              }`}
              onClick={closeMenu}
            >
              <Mail className="w-5 h-5 mr-2" />
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

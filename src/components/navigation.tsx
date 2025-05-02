"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useTransition } from "./page-transition"
import { RetroGlitch } from "@/components/retro-glitch"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isTransitioning } = useTransition()

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)
  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/90 backdrop-blur border-b border-cyan-400/30">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <RetroGlitch>
            <span className="text-xl font-bold text-cyan-400 font-pixel">&lt;DEV/&gt;</span>
          </RetroGlitch>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:space-x-6 font-pixel text-sm">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                isActive(href) ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              } ${isTransitioning ? "pointer-events-none" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
          disabled={isTransitioning}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-indigo-950 border-l border-cyan-500 shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6 font-pixel bg-black/70 text-lg text-gray-300">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={`hover:text-cyan-400 transition-colors ${
                isActive(href) ? "text-cyan-400" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-3xl md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  )
}

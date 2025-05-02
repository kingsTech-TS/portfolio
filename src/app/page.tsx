"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, User, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import RetroHeading from "@/components/retro-heading"
import PixelAvatar from "@/components/pixel-avatar"
import { RetroGlitch } from "@/components/retro-glitch"
import { ScanLines } from "@/components/scan-lines"
import { NeonText } from "@/components/neon-text"
import BootSequence from "@/components/boot-sequence"
import DigitalRain from "@/components/digital-rain"
import RainToggle from "@/components/rain-toggle"

export default function Home() {
  const [showRain, setShowRain] = useState(true)

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <BootSequence />
      <ScanLines />
      {showRain && <DigitalRain color="#00ff9b" speed={0.8} density={1.2} opacity={0.1} />}
      <RainToggle onToggle={setShowRain} initialState={showRain} />

      <div className="container relative z-10 px-4 py-16 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <div className="inline-block">
              <RetroGlitch>
                <span className="text-lg font-bold text-green-400 font-pixel">Hello World_</span>
              </RetroGlitch>
            </div>

            <RetroHeading>
              <NeonText color="pink">king&#39;s</NeonText>
              <span className="text-white">Tech</span>
              <span className="text-yellow-400">_</span>
            </RetroHeading>

            <p className="text-xl text-cyan-300 font-vt323">
              I create <span className="text-yellow-400">cool, responsive</span> web experiences with{" "}
              <span className="text-green-400">animated designs</span> and modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="relative z-20">
                <Button variant="retro" className="relative z-20">
                  <span>View Projects</span>
                  <Code className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link href="/contact" className="relative z-20">
                <Button variant="retroPink" className="relative z-20">
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-xl opacity-50 animate-pulse"></div>
              <div className="relative p-1 overflow-hidden border-4 border-cyan-400 rounded-lg shadow-lg bg-indigo-950">
                <PixelAvatar />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-24 md:grid-cols-3">
          <Link href="/about" className="group">
            <div className="p-6 transition-all border-2 border-yellow-500 rounded-lg shadow-lg bg-indigo-950/50 hover:bg-indigo-900/70 hover:shadow-yellow-500/20">
              <div className="flex items-center mb-4 space-x-2">
                <User className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-yellow-400 font-pixel">About Me</h2>
              </div>
              <p className="text-gray-300 font-vt323">
                Learn about my journey, skills, and experience in the digital realm.
              </p>
              <div className="flex items-center mt-4 text-yellow-400 group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-bold">Explore</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          <Link href="/projects" className="group">
            <div className="p-6 transition-all border-2 border-green-500 rounded-lg shadow-lg bg-indigo-950/50 hover:bg-indigo-900/70 hover:shadow-green-500/20">
              <div className="flex items-center mb-4 space-x-2">
                <Code className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-bold text-green-400 font-pixel">Projects</h2>
              </div>
              <p className="text-gray-300 font-vt323">Check out my latest work and the technologies I've mastered.</p>
              <div className="flex items-center mt-4 text-green-400 group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-bold">Discover</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          <Link href="/contact" className="group">
            <div className="p-6 transition-all border-2 border-pink-500 rounded-lg shadow-lg bg-indigo-950/50 hover:bg-indigo-900/70 hover:shadow-pink-500/20">
              <div className="flex items-center mb-4 space-x-2">
                <Mail className="w-6 h-6 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-400 font-pixel">Contact</h2>
              </div>
              <p className="text-gray-300 font-vt323">
                Get in touch for collaborations, opportunities, or just to say hello.
              </p>
              <div className="flex items-center mt-4 text-pink-400 group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-bold">Connect</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

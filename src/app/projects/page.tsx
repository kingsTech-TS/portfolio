"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import RetroHeading from "@/components/retro-heading"
import { ScanLines } from "@/components/scan-lines"
import { NeonText } from "@/components/neon-text"
import ProjectCard from "@/components/project-card"
import DigitalRain from "@/components/digital-rain"
import RainToggle from "@/components/rain-toggle"
import { RetroGlitch } from "@/components/retro-glitch"

export default function ProjectsPage() {
  const [showRain, setShowRain] = useState(true)
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <ScanLines />
      {showRain && <DigitalRain color="#00ff9b" speed={0.8} density={1.2} opacity={0.1} />}
      <RainToggle onToggle={setShowRain} initialState={showRain} />
      <div className="container relative z-10 px-4 py-16 mx-auto">
        <Link href="/" className="inline-flex items-center mb-8 text-cyan-300 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="font-pixel">Back to Home</span>
        </Link>

        <RetroHeading>
        <RetroGlitch>
          <NeonText color="green">MY</NeonText>
          <span className="text-white">_PROJECTS</span>
          </RetroGlitch>
        </RetroHeading>

        <p className="max-w-2xl mt-4 mb-12 text-xl text-gray-300 font-vt323">
          Check out some of my recent work. Each project represents a unique challenge and solution.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Birthday website"
            description="A music streaming application with a synthwave aesthetic, built with React and the Spotify API."
            image="/placeholder.svg?height=300&width=400"
            tags={["Next.js", "Canvas", "TailwindCSS"]}
            demoUrl="#"
            codeUrl="https://github.com/theKingSi/my-birthday-web21"
            color="pink"
          />

          <ProjectCard
            title="CGPA Calculator"
            description="An interactive tool for creating and sharing pixel art, with real-time collaboration features."
            image="/CGPA.png?height=300&width=400"
            tags={["HTML", "CSS", "javaScript"]}
            demoUrl="https://thekingsi.github.io/CGPA-Calculator/"
            codeUrl="https://github.com/theKingSi/CGPA-Calculator"
            color="cyan"
          />

          <ProjectCard
            title="Arcade Game Collection"
            description="A collection of classic arcade games reimagined for the web, built with JavaScript and HTML5 Canvas."
            image="/placeholder.svg?height=300&width=400"
            tags={["JavaScript", "Canvas", "Web Audio API"]}
            demoUrl="#"
            codeUrl="#"
            color="yellow"
          />

          <ProjectCard
            title="VHS Movie Database"
            description="A movie database with a retro VHS aesthetic, using the TMDB API to fetch movie data."
            image="/placeholder.svg?height=300&width=400"
            tags={["React", "TMDB API", "Framer Motion"]}
            demoUrl="#"
            codeUrl="#"
            color="green"
          />

          <ProjectCard
            title="Synthwave Dashboard"
            description="An admin dashboard with a synthwave design, featuring data visualization and user management."
            image="/placeholder.svg?height=300&width=400"
            tags={["Next.js", "D3.js", "Tailwind CSS"]}
            demoUrl="#"
            codeUrl="#"
            color="purple"
          />

          <ProjectCard
            title="Retro Blog Platform"
            description="A blog platform with a nostalgic design, built with Next.js and a headless CMS."
            image="/placeholder.svg?height=300&width=400"
            tags={["Next.js", "Sanity.io", "TypeScript"]}
            demoUrl="#"
            codeUrl="#"
            color="orange"
          />
        </div>
      </div>
    </main>
  )
}

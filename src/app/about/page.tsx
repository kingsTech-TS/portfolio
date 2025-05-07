"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Award, Briefcase, GraduationCap, Laptop, Laptop2, School, School2 } from "lucide-react"
import RetroHeading from "@/components/retro-heading"
import { ScanLines } from "@/components/scan-lines"
import { NeonText } from "@/components/neon-text"
import { TimelineItem } from "@/components/timeline-item"
import { SkillBadge } from "@/components/skill-badge"
import DigitalRain from "@/components/digital-rain"
import RainToggle from "@/components/rain-toggle"
import { RetroGlitch } from "@/components/retro-glitch"

export default function AboutPage() {
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
          <NeonText color="yellow">ABOUT</NeonText>
          <span className="text-white">_ME</span>
          </RetroGlitch>
        </RetroHeading>
       

        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="p-6 border-2 border-cyan-500 rounded-lg shadow-lg bg-indigo-950/50">
              <h2 className="mb-6 text-2xl font-bold text-cyan-400 font-pixel">My Story</h2>
              <div className="space-y-4 text-gray-300 font-vt323">
                <p>
                  I'm a passionate Software developer with a love for creating immersive digital experiences. My journey
                  began in the early days of the web, and I've evolved alongside the technologies that power our digital
                  world.
                </p>
                <p>
                  With a background in both design and development, I bring a unique perspective to every project. I
                  believe in the perfect balance between form and function, creating websites and web applications that not only look amazing
                  but perform flawlessly.
                </p>
                <p>
                When I&rsquo;m not coding, you&rsquo;ll find me capturing moments through photography, crafting engaging content, or exploring visual storytelling to connect ideas and creativity in new ways.

                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-pink-400 font-pixel">My Journey</h2>
              <div className="space-y-8">
                <TimelineItem
                  icon={<Briefcase className="w-5 h-5" />}
                  date="2024 - Present"
                  title="Senior Frontend Developer"
                  company="JeoLinks INC."
                  description="Leading the frontend team in developing modern Software applications using React.js, Next.js, JavaScript and TypeScript."
                  color="pink"
                />

                <TimelineItem
                  icon={<Award className="w-5 h-5" />}
                  date="2023 - 2024"
                  title="JavaScript Certified/Software Developer"
                  company="Techub EKSU"
                  description="Earned certification in JavaScript, enhancing frontend development skills and building dynamic, interactive web applications."
                  color="cyan"
                />

                <TimelineItem
                  icon={<Laptop className="w-5 h-5" />}
                  date="2022 - 2023"
                  title="Web Designer"
                  company="D'Lence Technoligies"
                  description="Worked on designing user-friendly and visually engaging websites, focusing on layout, responsiveness, and user experience."
                  color="yellow"
                />

                <TimelineItem
                  icon={<School2 className="w-5 h-5" />}
                  date="2021"
                  title="Web Designer in Training"
                  company="D'Lence Technoligies"
                  description="Began the journey into web design by learning HTML, CSS, and design principles through online resources and practice projects."
                  color="green"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="p-6 border-2 border-yellow-500 rounded-lg shadow-lg bg-indigo-950/50">
              <h2 className="mb-6 text-2xl font-bold text-yellow-400 font-pixel">Skills</h2>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-white font-pixel">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React" color="cyan" />
                  <SkillBadge name="Next.js" color="white" />
                  <SkillBadge name="TypeScript" color="blue" />
                  <SkillBadge name="Tailwind CSS" color="silver" />
                  <SkillBadge name="JavaScript" color="yellow" />
                  <SkillBadge name="HTML5" color="orange" />
                  <SkillBadge name="CSS3" color="indigo" />
                  <SkillBadge name="Bootstrap" color="green" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-white font-pixel">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="mySQL" color="rose" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-white font-pixel">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" color="orange" />
                  <SkillBadge name="Figma" color="purple" />
                  <SkillBadge name="VS Code" color="blue" />
                  <SkillBadge name="Docker" color="yellow" />
                  <SkillBadge name="sublime Text" color="green" />
                  <SkillBadge name="Postman" color="rose" />
                </div>
              </div>
            </div>

            <div className="p-6 mt-8 border-2 border-green-500 rounded-lg shadow-lg bg-indigo-950/50">
              <h2 className="mb-6 text-2xl font-bold text-green-400 font-pixel">Interests</h2>
              <ul className="space-y-2 text-gray-300 font-vt323">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-400"></span>
                  Retro Gaming
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-400"></span>
                 Content Creation
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-400"></span>
                  Photography
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-400"></span>
                  Video Editing
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-400"></span>
                  UI/UX Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

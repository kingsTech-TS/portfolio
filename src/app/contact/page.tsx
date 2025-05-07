"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send, Github, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import RetroHeading from "@/components/retro-heading"
import { ScanLines } from "@/components/scan-lines"
import { NeonText } from "@/components/neon-text"
import { RetroGlitch } from "@/components/retro-glitch"
import DigitalRain from "@/components/digital-rain"
import RainToggle from "@/components/rain-toggle"

export default function ContactPage() {
  const [showRain, setShowRain] = useState(true)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
  
      if (res.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <NeonText color="pink">GET</NeonText>
          <span className="text-white">_IN_TOUCH</span>
          </RetroGlitch>
        </RetroHeading>

        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-2">
          <div>
            <div className="p-6 border-2 border-pink-500 rounded-lg shadow-lg bg-indigo-950/50">
              <h2 className="mb-6 text-2xl font-bold text-pink-400 font-pixel">Contact Me</h2>

              {isSubmitted ? (
                <div className="p-6 text-center">
                  <RetroGlitch>
                    <h3 className="mb-4 text-xl font-bold text-green-400 font-pixel">Message Sent!</h3>
                  </RetroGlitch>
                  <p className="mb-6 text-gray-300 font-vt323">
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="retroGreen" className="relative z-20">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-300 font-pixel">
                      NAME_
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="border-2 border-pink-500/50 bg-indigo-950/50 text-white font-vt323"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-300 font-pixel">
                      EMAIL_
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="border-2 border-pink-500/50 bg-indigo-950/50 text-white font-vt323"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-300 font-pixel">
                      MESSAGE_
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-2 border-pink-500/50 bg-indigo-950/50 text-white font-vt323"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} variant="retroPink" className="w-full relative z-20">
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="mr-2 animate-pulse">Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span className="mr-2 cursor-pointer">Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div>
            <div className="p-6 border-2 border-cyan-500 rounded-lg shadow-lg bg-indigo-950/50">
              <h2 className="mb-6 text-2xl font-bold text-cyan-400 font-pixel">Connect</h2>

              <div className="space-y-6">
                <p className="text-gray-300 font-vt323">
                  Feel free to reach out through the form or connect with me on social media. I'm always open to
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:ndunewesolomon@gmail.com"
                    className="flex items-center p-3 transition-colors border-2 border-yellow-500 rounded-lg bg-indigo-950/50 hover:bg-yellow-950/50 group"
                  >
                    <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                    <span className="text-gray-300 font-vt323 group-hover:text-yellow-300">ndunewesolomon@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/theKingSi?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 transition-colors border-2 border-green-500 rounded-lg bg-indigo-950/50 hover:bg-green-950/50 group"
                  >
                    <Github className="w-5 h-5 mr-3 text-green-400" />
                    <span className="text-gray-300 font-vt323 group-hover:text-green-300">github.com/theKingSi</span>
                  </a>

                  <a
                    href="https://wa.link/mzkoo2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 transition-colors border-2 border-blue-500 rounded-lg bg-indigo-950/50 hover:bg-blue-950/50 group"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 text-blue-400" />
                    <span className="text-gray-300 font-vt323 group-hover:text-blue-300">https://wa.link/mzkoo2</span>
                  </a>

                  <a
                    href="https://x.com/oneboilikedat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 transition-colors border-2 border-pink-500 rounded-lg bg-indigo-950/50 hover:bg-pink-950/50 group"
                  >
                    <Twitter className="w-5 h-5 mr-3 text-pink-400" />
                    <span className="text-gray-300 font-vt323 group-hover:text-pink-300">twitter.com/oneboilikedat</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 mt-8 border-2 border-purple-500 rounded-lg shadow-lg bg-indigo-950/50">
              <h2 className="mb-6 text-2xl font-bold text-purple-400 font-pixel">Office Hours</h2>

              <div className="space-y-4 text-gray-300 font-vt323">
                <p>
                  <span className="font-bold text-purple-300">Monday - Friday:</span> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <span className="font-bold text-purple-300">Saturday:</span> 9:00 AM - 3:00 PM
                </p>
                <p>
                  <span className="font-bold text-purple-300">Sunday:</span> Closed
                </p>
                <p className="pt-2">
                  Working <span className="font-bold text-purple-300">remotely</span> with clients from around the <span className="font-bold text-purple-300">globe</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

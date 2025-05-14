import type { ReactNode } from "react"

interface RetroHeadingProps {
  children: ReactNode
}

export default function RetroHeading({ children }: RetroHeadingProps) {
  return (
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-pixel">{children}</h1>
  )
}

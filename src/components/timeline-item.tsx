import type { ReactNode } from "react"

interface TimelineItemProps {
  icon: ReactNode
  date: string
  title: string
  company: string
  description: string
  color: "pink" | "cyan" | "yellow" | "green" | "purple"
}

export function TimelineItem({ icon, date, title, company, description, color }: TimelineItemProps) {
  const colorClasses = {
    pink: "bg-pink-500/20 border-pink-500 text-pink-400",
    cyan: "bg-cyan-500/20 border-cyan-500 text-cyan-400",
    yellow: "bg-yellow-500/20 border-yellow-500 text-yellow-400",
    green: "bg-green-500/20 border-green-500 text-green-400",
    purple: "bg-purple-500/20 border-purple-500 text-purple-400",
  }

  return (
    <div className="relative pl-10 border-l-2 border-dashed border-gray-700">
      <div
        className={`absolute left-[-13px] top-0 flex items-center justify-center w-6 h-6 rounded-full border-2 ${colorClasses[color]}`}
      >
        {icon}
      </div>

      <div className="mb-1 text-sm font-vt323">
        <span className={`text-${color}-400`}>{date}</span>
      </div>

      <h3 className="text-lg font-bold font-pixel text-white">{title}</h3>
      <div className="mb-2 text-sm font-vt323 text-gray-400">{company}</div>

      <p className="text-gray-300 font-vt323">{description}</p>
    </div>
  )
}

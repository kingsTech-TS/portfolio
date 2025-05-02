export default function PixelAvatar() {
    return (
      <div className="relative w-[400px] h-[400px]">
        {/* Pixel art avatar created with CSS */}
        <div className="w-full h-full bg-indigo-800 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="pixel-avatar-container">
            {/* Simple pixel art face using CSS grid */}
            <div className="grid grid-cols-16 gap-0 w-64 h-64">
              {/* Pixel art created with div elements */}
              {Array(256)
                .fill(0)
                .map((_, index) => {
                  // Create a simple pixel art face pattern
                  const row = Math.floor(index / 16)
                  const col = index % 16
  
                  // Hair (top rows)
                  if (row < 4 && col > 3 && col < 12) {
                    return <div key={index} className="bg-purple-500"></div>
                  }
  
                  // Face
                  if (row >= 4 && row < 12 && col > 2 && col < 13) {
                    return <div key={index} className="bg-yellow-300"></div>
                  }
  
                  // Eyes
                  if (row === 6 && (col === 5 || col === 10)) {
                    return <div key={index} className="bg-blue-600"></div>
                  }
  
                  // Mouth
                  if (row === 9 && col > 5 && col < 10) {
                    return <div key={index} className="bg-red-500"></div>
                  }
  
                  // Default transparent pixel
                  return <div key={index} className="bg-transparent"></div>
                })}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent rounded-lg"></div>
      </div>
    )
  }
  
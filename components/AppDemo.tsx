import Image from 'next/image'

// Replace these with your actual screenshot file paths
const screenshots = [
  '/screenshots/local-feed.jpg',    // file:6
  '/screenshots/nearby-plumbers.jpg', // file:7
  '/screenshots/categories.jpg',     // file:8
  '/screenshots/business-profile.jpg' // file:9
]

export default function AppDemo() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {screenshots.map((src, index) => (
        <div key={index} className="relative group">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="bg-black rounded-3xl p-4 relative overflow-hidden">
              <Image
                src={src}
                alt={`Spotnearr screenshot ${index + 1}`}
                width={400}
                height={800}
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

import Image from 'next/image'

export default function Gallery() {
  const images = [
    'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Wedding+Photo+1',
    'https://via.placeholder.com/400x300/87CEEB/FFFFFF?text=Wedding+Photo+2',
    'https://via.placeholder.com/400x300/98FB98/FFFFFF?text=Wedding+Photo+3',
    'https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Wedding+Photo+4',
    'https://via.placeholder.com/400x300/F0E68C/FFFFFF?text=Wedding+Photo+5',
    'https://via.placeholder.com/400x300/FFA07A/FFFFFF?text=Wedding+Photo+6',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={src}
                alt={`Wedding photo ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">More photos coming soon! Stay tuned for updates.</p>
      </div>
    </main>
  )
}
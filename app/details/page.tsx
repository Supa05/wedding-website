export default function Details() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Wedding Details</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ceremony</h2>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> October 17, 2026</p>
              <p className="text-gray-600 mb-2"><strong>Time:</strong> 4:00 PM</p>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> Authority Global Church</p>
              <p className="text-gray-600">25 Temple Street, Accra, Ghana</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reception</h2>
              <p className="text-gray-600 mb-2"><strong>Time:</strong> 6:00 PM</p>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> SupaTech 5star Hotel</p>
              <p className="text-gray-600">456 Lagos Avenue, Accra, Ghana</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dress Code</h2>
            <p className="text-gray-600">Semi-formal attire. Please wear something comfortable for dancing!</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Parking</h2>
            <p className="text-gray-600">Free parking available at both venues.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
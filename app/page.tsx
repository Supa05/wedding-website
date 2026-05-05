export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-rose-50 flex flex-col items-center justify-center px-6 py-16">

      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h2 className="text-lg uppercase tracking-widest text-gray-500 mb-2">
          We&apos;re Getting Married
        </h2>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Daniel & Sarah
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Join us as we celebrate our love
        </p>

        {/* Date */}
        <p className="text-2xl font-semibold text-rose-500 mb-8">
          May 15, 2026
        </p>

        {/* Event Details */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
          <p className="text-gray-700 text-lg">
            📍 St. Mary&apos;s Church — 4:00 PM
          </p>
          <p className="text-gray-700 text-lg mt-2">
            🎉 Grand Ballroom Hotel — 6:00 PM
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
          RSVP Now
        </button>

        {/* Countdown Placeholder */}
        <div className="mt-10 text-gray-600">
          <p className="text-sm">Counting down to the big day...</p>
          <p className="text-xl font-semibold mt-2">
            00 Days : 00 Hours : 00 Minutes
          </p>
        </div>

        {/* Footer Message */}
        <p className="mt-10 text-gray-500 italic">
          We can&apos;t wait to celebrate with you ❤️
        </p>
      </section>
    </main>
  );
}
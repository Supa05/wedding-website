"use client"

import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const target = new Date(2026, 4, 15, 16, 0, 0).getTime()
  const now = Date.now()
  const difference = Math.max(target - now, 0)

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setMounted(true)

    setTimeLeft(getTimeLeft())

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-rose-50">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-gray-800">
            Supatech & Richie
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-gray-700 hover:text-rose-500">
              Home
            </a>

            <a href="#details" className="text-gray-700 hover:text-rose-500">
              Details
            </a>

            <a href="#gallery" className="text-gray-700 hover:text-rose-500">
              Gallery
            </a>

            <a
              href="#rsvp"
              className="rounded-full bg-rose-500 px-5 py-2 text-white transition hover:bg-rose-600"
            >
              RSVP
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#details" onClick={() => setMenuOpen(false)}>
                Details
              </a>

              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>

              <a
                href="#rsvp"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-rose-500 px-4 py-2 text-center text-white"
              >
                RSVP
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        
        <section className="text-center">
          <p className="mb-2 text-lg uppercase tracking-widest text-gray-500">
            We&apos;re Getting Married
          </p>

          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-7xl">
            Supatech & Richie
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
            Join us as we celebrate our love with family and friends.
          </p>

          {/* DETAILS */}
          <div
            id="details"
            className="mx-auto inline-flex w-full max-w-2xl flex-col gap-3 rounded-3xl bg-white/95 p-6 text-left shadow-xl ring-1 ring-rose-100"
          >
            <div className="rounded-3xl bg-rose-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
                Wedding Day
              </p>

              <p className="text-3xl font-semibold text-rose-600">
                May 15, 2026
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-500">Ceremony</p>

                <p className="font-semibold text-gray-800">
                  4:00 PM
                </p>

                <p className="text-sm text-gray-600">
                  Authority Global&apos;s Church
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-500">Reception</p>

                <p className="font-semibold text-gray-800">
                  6:00 PM
                </p>

                <p className="text-sm text-gray-600">
                  SupaTech 5star Hotel
                </p>
              </div>
            </div>

            {/* RSVP BUTTON */}
            <a
              href="#rsvp"
              className="mt-4 rounded-full bg-rose-500 px-6 py-3 text-center text-lg font-semibold text-white shadow-md transition hover:bg-rose-600"
            >
              RSVP Now
            </a>
          </div>

          {/* COUNTDOWN */}
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white/95 p-6 shadow-xl ring-1 ring-rose-100">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Countdown
            </p>

            {mounted && (
              <div className="mt-4 grid gap-4 text-center sm:grid-cols-4">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-rose-50 p-4"
                  >
                    <p className="text-3xl font-bold text-rose-600">
                      {String(item.value).padStart(2, "0")}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GALLERY */}
          <div id="gallery" className="mt-16">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Gallery
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="h-64 rounded-3xl bg-rose-100"></div>
              <div className="h-64 rounded-3xl bg-rose-200"></div>
              <div className="h-64 rounded-3xl bg-rose-300"></div>
            </div>
          </div>

          {/* RSVP SECTION */}
          <div
            id="rsvp"
            className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-8 shadow-xl"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              RSVP
            </h2>

            <p className="mb-6 text-gray-600">
              We would love to celebrate with you.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-3 outline-none focus:border-rose-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-3 outline-none focus:border-rose-400"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-rose-500 px-6 py-3 font-semibold text-white transition hover:bg-rose-600"
              >
                Submit RSVP
              </button>
            </form>
          </div>

          <p className="mt-10 text-base italic text-gray-600">
            Open this page on your phone for the best experience.
          </p>
        </section>
      </div>
    </main>
  )
}
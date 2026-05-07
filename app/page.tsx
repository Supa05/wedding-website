"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

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

    <h1 className="text-3xl font-bold text-gray-900">
      Supatech & Richie
    </h1>

    {/* Desktop Menu */}
    <nav className="hidden items-center gap-6 md:flex">
      <Link href="/" className="text-gray-700 hover:text-rose-500">
        Home
      </Link>

      <a href="#details" className="text-gray-700 hover:text-rose-500">
        Details
      </a>

      <a href="#gallery" className="text-gray-700 hover:text-rose-500">
        Gallery
      </a>

      <a
        href="#rsvp"
        className="rounded-full bg-rose-500 px-5 py-2 font-semibold text-white hover:bg-rose-600"
      >
        RSVP
      </a>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-3xl text-gray-700 md:hidden"
    >
      ☰
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="border-t bg-white px-6 py-4 md:hidden">
      <div className="flex flex-col gap-4">

        <Link
          href="/"
          className="text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <a
          href="#details"
          className="text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Details
        </a>

        <a
          href="#gallery"
          className="text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </a>

        <a
          href="#rsvp"
          className="rounded-full bg-rose-500 px-4 py-2 text-center font-semibold text-white"
          onClick={() => setMenuOpen(false)}
        >
          RSVP
        </a>
      </div>
    </div>
  )}
</header>

      {/* MAIN CONTENT */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        
        <section
          id="details"
          className="text-center lg:text-left"
        >
          <p className="mb-2 text-lg uppercase tracking-widest text-gray-500">
            We&apos;re Getting Married
          </p>

          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
            Supatech & Richie
          </h1>

          <p className="mb-6 text-xl text-gray-600">
            Join us as we celebrate our love with family and friends.
          </p>

          <div className="inline-flex flex-col gap-3 rounded-3xl bg-white/95 p-6 text-left shadow-xl ring-1 ring-rose-100 lg:max-w-md">
            
            <div className="rounded-3xl bg-rose-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
                Wedding Day
              </p>

              <p className="text-2xl font-semibold text-rose-600">
                May 15, 2026
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-500">Ceremony</p>
                <p className="font-semibold text-gray-800">4:00 PM</p>

                <p className="text-sm text-gray-600">
                  Authority Global&apos;s Church
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-gray-500">Reception</p>
                <p className="font-semibold text-gray-800">6:00 PM</p>

                <p className="text-sm text-gray-600">
                  SupaTech 5star Hotel
                </p>
              </div>
            </div>

            {/* RSVP BUTTON */}
            <a
              id="rsvp"
              href="https://wa.me/"
              target="_blank"
              className="mt-4 rounded-full bg-rose-500 px-6 py-3 text-center text-lg font-semibold text-white shadow-md transition hover:bg-rose-600"
            >
              RSVP Now
            </a>
          </div>

          {/* COUNTDOWN */}
          <div className="mt-10 rounded-3xl bg-white/95 p-6 shadow-xl ring-1 ring-rose-100 lg:max-w-md">
            
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
          <div
            id="gallery"
            className="mt-16"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Gallery
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-48 rounded-3xl bg-rose-100"></div>
              <div className="h-48 rounded-3xl bg-rose-200"></div>
              <div className="h-48 rounded-3xl bg-rose-300"></div>
            </div>
          </div>

          <p className="mt-10 text-base italic text-gray-600">
            Open this page on your phone for the best experience, and save the
            date in your calendar!
          </p>
        </section>
      </div>
    </main>
  )
}
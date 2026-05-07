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
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-rose-50 px-6 py-16">

      <div className="mx-auto w-full max-w-5xl">

        {/* HERO SECTION */}
        <section className="text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-rose-500">
            We&apos;re Getting Married
          </p>

          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-7xl">
            Supatech <span className="text-rose-500">&</span> Richie
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Together with our families, we joyfully invite you to celebrate
            our wedding day and share in the beginning of our forever.
          </p>

          {/* DATE CARD */}
          <div className="mx-auto mb-10 max-w-xl rounded-[32px] bg-white p-8 shadow-xl ring-1 ring-rose-100">

            <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
              Wedding Date
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-800">
              May 15, 2026
            </h2>

            <p className="mt-2 text-gray-500">
              Friday • 4:00 PM
            </p>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">

              <div className="rounded-3xl bg-rose-50 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-rose-400">
                  Ceremony
                </p>

                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  Authority Global Church
                </h3>

                <p className="mt-1 text-gray-600">
                  Accra, Ghana
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Reception
                </p>

                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  SupaTech 5star Hotel
                </h3>

                <p className="mt-1 text-gray-600">
                  6:00 PM Reception Party
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

              <Link
                href="/rsvp"
                className="rounded-full bg-rose-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-rose-600"
              >
                RSVP Now
              </Link>

              <Link
                href="/details"
                className="rounded-full border border-rose-200 bg-white px-8 py-3 text-lg font-semibold text-gray-700 transition hover:bg-rose-50"
              >
                View Details
              </Link>

            </div>
          </div>

          {/* COUNTDOWN */}
          <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-xl ring-1 ring-rose-100">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Countdown To Forever
            </p>

            {mounted && (
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-gradient-to-b from-rose-50 to-white p-6 shadow-sm ring-1 ring-rose-100"
                  >
                    <p className="text-4xl font-bold text-rose-600">
                      {String(item.value).padStart(2, "0")}
                    </p>

                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}

              </div>
            )}
          </div>

          {/* MESSAGE */}
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-lg italic leading-relaxed text-gray-600">
              “A successful marriage requires falling in love many times,
              always with the same person.”
            </p>

            <p className="mt-4 text-gray-500">
              We can&apos;t wait to celebrate this unforgettable day with you ❤️
            </p>
          </div>

        </section>

      </div>
    </main>
  )
}
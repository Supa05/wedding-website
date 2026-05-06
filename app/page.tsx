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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <section className="flex-1 text-center lg:text-left">
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

            <button className="mt-4 rounded-full bg-rose-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-rose-600">
              RSVP Now
            </button>
          </div>

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

          <p className="mt-10 text-base italic text-gray-600">
            Open this page on your phone for the best experience, and save the
            date in your calendar!
          </p>
        </section>

        <aside className="flex-1 self-center lg:self-auto">
          <div className="mx-auto w-full max-w-xs rounded-[42px] border-8 border-slate-200 bg-slate-950 shadow-2xl">
            <div className="flex h-12 items-center justify-center rounded-t-[30px] border-b border-slate-800 bg-slate-900 text-sm text-slate-300">
              Wedding App Preview
            </div>

            <div className="bg-gradient-to-b from-slate-950 to-slate-900 p-5 text-white">
              <div className="mb-6 rounded-3xl bg-slate-800 p-4 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Today
                </p>

                <p className="mt-2 text-2xl font-semibold">May 15</p>

                <p className="text-sm text-slate-400">Save the date</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-white/5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Event
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    Authority Global&apos;s Church
                  </p>

                  <p className="text-sm text-slate-400">4:00 PM</p>
                </div>

                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-white/5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Reception
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    SupaTech 5star Hotel
                  </p>

                  <p className="text-sm text-slate-400">6:00 PM</p>
                </div>

                <div className="rounded-3xl bg-slate-900/80 p-4 ring-1 ring-white/5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Your phone
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    Open the app
                  </p>

                  <p className="text-sm text-slate-400">
                    Tap to see event details
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-600">
                Open on Phone
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
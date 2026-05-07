"use client"

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className={`${inter.className} bg-rose-50 text-gray-800`}>

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link
              href="/"
              className={`${playfair.className} text-2xl font-semibold`}
            >
              Supatech & Richie
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-8 md:flex">
              <li>
                <Link href="/" className="hover:text-rose-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/details" className="hover:text-rose-500 transition">
                  Details
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-rose-500 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/rsvp"
                  className="rounded-full bg-rose-500 px-5 py-2 text-white transition hover:bg-rose-600"
                >
                  RSVP
                </Link>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="text-3xl md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="border-t bg-white px-6 py-4 md:hidden">
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/details" onClick={() => setMenuOpen(false)}>
                    Details
                  </Link>
                </li>

                <li>
                  <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link
                    href="/rsvp"
                    onClick={() => setMenuOpen(false)}
                    className="inline-block rounded-full bg-rose-500 px-5 py-2 text-center text-white"
                  >
                    RSVP
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500">
            <p>© 2026 Supatech & Richie Wedding</p>
            <p className="mt-2">Made with ❤️ for our special day</p>
          </div>
        </footer>

      </body>
    </html>
  )
}
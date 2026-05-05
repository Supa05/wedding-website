import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
// @ts-ignore
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'Daniel & Sarah Wedding',
  description: 'Join us as we celebrate our wedding on May 15, 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-rose-50 text-gray-800`}>

        {/* HEADER */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo / Title */}
            <Link href="/" className={`${playfair.className} text-2xl font-semibold text-gray-800`}>
              Daniel & Sarah
            </Link>

            {/* Navigation */}
            <ul className="hidden md:flex space-x-8 text-sm font-medium">
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
                <Link href="/rsvp" className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition">
                  RSVP
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
              <button className="text-gray-700">
                ☰
              </button>
            </div>

          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-white mt-16 border-t">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
            <p>© 2026 Daniel & Sarah Wedding</p>
            <p className="mt-2">Made with ❤️ for our special day</p>
          </div>
        </footer>

      </body>
    </html>
  )
}
'use client'

import { createClient } from '@supabase/supabase-js/dist/index.cjs'
import { useState } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '0',
    message: ''
  })

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!formData.attending) {
    alert('Please select if you are attending.')
    return
  }

  const { error } = await supabase.from('rsvps').insert([
    {
      name: formData.name,
      email: formData.email,
      attending: formData.attending,
      guests: Number(formData.guests),
      message: formData.message,
    },
  ])

  if (error) {
    console.error("SUPABASE ERROR:", error)
    alert(error.message)
  } else {
    alert(`Thank you ${formData.name}! Your RSVP has been saved.`)
    setFormData({
      name: '',
      email: '',
      attending: '',
      guests: '0',
      message: '',
    })
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">RSVP</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            name="attending"
            value={formData.attending}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Are you attending?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  )
}

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { isAdminAuth, getAdminCookieName } from '../../lib/adminAuth'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default async function AdminPage() {
  const adminCookie = cookies().get(getAdminCookieName())?.value
  if (!isAdminAuth(adminCookie)) {
    redirect('/admin/login')
  }

  const { data: rsvps } = await supabase
    .from('rsvps')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Guest List</h1>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Attending</th>
              <th className="p-3 border">Guests</th>
              <th className="p-3 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {rsvps?.map((rsvp: any) => (
              <tr key={rsvp.id}>
                <td className="p-3 border">{rsvp.name}</td>
                <td className="p-3 border">{rsvp.email}</td>
                <td className="p-3 border">{rsvp.attending}</td>
                <td className="p-3 border">{rsvp.guests}</td>
                <td className="p-3 border">{rsvp.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
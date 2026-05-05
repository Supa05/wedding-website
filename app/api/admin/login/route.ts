import { NextRequest, NextResponse } from 'next/server'
import { getAdminCookieValue } from '@/lib/adminAuth'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const username = body?.username
  const password = body?.password

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true })
    res.cookies.set({
      name: 'admin-auth',
      value: getAdminCookieValue(),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}

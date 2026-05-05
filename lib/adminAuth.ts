import { createHash } from 'crypto'

const adminUsername = process.env.ADMIN_USER
const adminPassword = process.env.ADMIN_PASSWORD
const adminCookieName = 'admin-auth'

export function getAdminCookieName() {
  return adminCookieName
}

export function getAdminCookieValue() {
  if (!adminUsername || !adminPassword) {
    throw new Error('ADMIN_USER and ADMIN_PASSWORD must be set in environment variables')
  }

  return createHash('sha256')
    .update(`${adminUsername}:${adminPassword}`)
    .digest('hex')
}

export function isAdminAuth(cookieValue: string | undefined) {
  if (!cookieValue) {
    return false
  }

  try {
    return cookieValue === getAdminCookieValue()
  } catch {
    return false
  }
}

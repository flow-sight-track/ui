'use server'

import { cookies } from 'next/headers'
import { AUTHENTICATION_COOKIE } from '../../../../constants/auth-cookie'
import { redirect } from 'next/navigation'

export default async function logout() {
  cookies().delete(AUTHENTICATION_COOKIE)
  redirect('/signin')
}

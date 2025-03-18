'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { jwtDecode } from 'jwt-decode'

import { API_URL } from '@/constants/api'

import { getErrorMessage } from '@/lib/errors'

export default async function loginUser(
  _prevState: unknown,
  formData: FormData
) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
  })

  const parsedRes = await res.json()

  if (!res.ok) {
    return {
      error: getErrorMessage(parsedRes)
    }
  }

  setAuthCookie(res)
  return redirect('/dashboard')
}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get('Set-Cookie')

  if (setCookieHeader) {
    const token = setCookieHeader.split(';')[0].split('=')[1]
    cookies().set({
      name: 'Authentication',
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000)
    })
  }
}

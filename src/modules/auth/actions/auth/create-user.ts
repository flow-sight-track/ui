'use server'

import { redirect } from 'next/navigation'

import { post } from '@/lib/fetch'

export default async function createUser(
  _prevState: unknown,
  formData: FormData
) {
  const { error } = await post('users', formData)

  if (error) {
    return { error }
  }

  redirect('/signin')
}

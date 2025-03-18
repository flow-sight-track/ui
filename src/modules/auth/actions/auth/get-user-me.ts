'use server'

import { get } from '@/lib/fetch'

export default async function getMe() {
  return get('users/me')
}

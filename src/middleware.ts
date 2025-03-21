import { NextRequest, NextResponse } from 'next/server'
import authenticated from './hooks/auth/authenticated'

const unauthorizedRoutes = ['/signin', '/signup']

export function middleware(request: NextRequest) {
  if (
    !authenticated() &&
    !unauthorizedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    )
  ) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'
  ]
}

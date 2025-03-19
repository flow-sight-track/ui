'use client'

import { ThemeProvider } from '@mui/material'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { AuthContext } from '@/contexts/auth-context'

import { theme } from '@/styles/theme'

interface ProvidersProps {
  children: React.ReactElement[]
  authenticated: boolean
}

export default function Providers({ children, authenticated }: ProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={authenticated}>
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

import type { Metadata } from 'next'

import { Box, CssBaseline, ThemeProvider } from '@mui/material'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { theme } from '@/styles/theme'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>{children}</Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

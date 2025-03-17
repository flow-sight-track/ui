import { Box } from '@mui/material'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box className="h-screen flex items-center justify-center">{children}</Box>
  )
}

export default AuthLayout

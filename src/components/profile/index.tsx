import { Box, Avatar, Typography, IconButton } from '@mui/material'

import logout from '@/modules/auth/actions/auth/logout-user'

import { LogOutIcon } from 'lucide-react'

export const Profile = () => {
  const handleLogout = async () => {
    await logout()
  }

  return (
    <>
      <Box component="div" className="flex items-center gap-4">
        <Avatar
          alt="Jane Doe"
          src="https://mighty.tools/mockmind-api/content/human/125.jpg"
        />
        <Typography variant="body2">Jane Doe</Typography>
      </Box>
      <Box>
        <IconButton onClick={() => handleLogout()}>
          <LogOutIcon className="size-4" />
        </IconButton>
      </Box>
    </>
  )
}

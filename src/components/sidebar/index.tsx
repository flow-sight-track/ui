'use client'

import { useContext } from 'react'

import { Drawer, Box } from '@mui/material'

import { AuthContext } from '@/contexts/auth-context'

import { drawerWidth } from '@/lib/size'

import { Logo } from '../logo'
import { NavLink } from '../nav-link'
import { Profile } from '../profile'

export const Sidebar = () => {
  const isAuthencated = useContext(AuthContext)

  // TODO - Change this to a proper check isAdmin
  console.log(isAuthencated)

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <div className="flex items-center p-3">
        <Logo />
      </div>
      <div className="flex flex-col justify-between h-full">
        <NavLink />
        <Box component="div" className="flex items-center justify-between p-4">
          <Profile />
        </Box>
      </div>
    </Drawer>
  )
}

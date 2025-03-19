import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography
} from '@mui/material'

import { LayoutDashboardIcon, LogOutIcon } from 'lucide-react'

import { drawerWidth } from '@/lib/size'

import { Logo } from '../logo'

const routes = [
  {
    icon: <LayoutDashboardIcon />,
    label: 'Dashboard',
    href: '/dashboard',
    active: true
  }
]

export const Sidebar = () => {
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
      <Divider />
      <div className="flex flex-col justify-between h-full">
        <List>
          {routes.map((route) => (
            <ListItem key={route.label} disablePadding>
              <ListItemButton LinkComponent="a" href={route.href}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box component="div" className="flex items-center justify-between p-4">
          <Box component="div" className="flex items-center gap-4">
            <Avatar
              alt="Jane Doe"
              src="https://mighty.tools/mockmind-api/content/human/125.jpg"
            />
            <Typography variant="body2">Jane Doe</Typography>
          </Box>
          <Box>
            <LogOutIcon className="size-4" />
          </Box>
        </Box>
      </div>
    </Drawer>
  )
}

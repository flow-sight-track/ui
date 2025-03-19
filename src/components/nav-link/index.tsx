const routes = [
  {
    icon: <LayoutDashboardIcon />,
    label: 'Dashboard',
    href: '/dashboard',
    active: true
  }
]

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import { LayoutDashboardIcon } from 'lucide-react'

export const NavLink = () => {
  return (
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
  )
}

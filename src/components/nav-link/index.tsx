import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import { routesConfig } from '../routes'

export const NavLink = () => {
  const pathname = usePathname()

  const routes = useMemo(() => {
    return routesConfig.map((route) => ({
      ...route,
      active: pathname === route.href
    }))
  }, [pathname])

  return (
    <List>
      {routes.map((route) => (
        <ListItem key={route.label} disablePadding>
          <ListItemButton
            LinkComponent="a"
            href={route.href}
            selected={route.active}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

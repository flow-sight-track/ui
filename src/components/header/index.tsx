import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { drawerWidth } from '@/lib/size'

interface HeaderProps {
  title: string
  content?: React.ReactNode | null
}

export const Header = ({ title, content }: HeaderProps) => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      className="border-b border-grey-200 bg-white"
    >
      <Toolbar className="flex justify-between items-center">
        <Typography
          variant="h6"
          noWrap
          component="div"
          color="primary"
          fontWeight="bold"
        >
          {title}
        </Typography>
        {content && <Box>{content}</Box>}
      </Toolbar>
    </AppBar>
  )
}

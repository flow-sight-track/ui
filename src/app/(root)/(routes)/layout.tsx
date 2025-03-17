import { Box, Card, CssBaseline, Grid, Toolbar } from '@mui/material'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header title="Dashboard" />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Grid>
          <Card elevation={1} className="p-5">
            {children}
          </Card>
        </Grid>
      </Box>
    </Box>
  )
}

export default Layout

import NextLink from 'next/link'

import { Button, Link, Stack, TextField } from '@mui/material'

const SignInPage = () => {
  return (
    <Stack spacing={2} className="w-full max-w-sm">
      <TextField type="email" label="E-mail" variant="outlined" />
      <TextField type="password" label="Senha" variant="outlined" />
      <Button variant="contained">Login</Button>
      <Link href="/signup" component={NextLink} className="self-center">
        Não tem uma conta? Crie uma
      </Link>
    </Stack>
  )
}

export default SignInPage

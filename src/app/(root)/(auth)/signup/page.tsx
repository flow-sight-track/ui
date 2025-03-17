import NextLink from 'next/link'

import { Button, Link, Stack, TextField } from '@mui/material'

const SignUpPage = () => {
  return (
    <Stack spacing={2} className="w-full max-w-sm">
      <TextField type="email" label="E-mail" variant="outlined" />
      <TextField type="password" label="Senha" variant="outlined" />
      <Button variant="contained">Login</Button>
      <Link href="/signin" component={NextLink} className="self-center">
        Já tem uma conta? Faça seu login
      </Link>
    </Stack>
  )
}

export default SignUpPage

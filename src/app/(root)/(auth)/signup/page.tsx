'use client'

import { useFormState } from 'react-dom'
import NextLink from 'next/link'

import { Button, Card, Link, Stack, TextField } from '@mui/material'

import createUser from '@/actions/auth/create-user'

const SignUpPage = () => {
  const [state, formAction] = useFormState(createUser, {
    error: ''
  })
  return (
    <form action={formAction} className="w-full max-w-md">
      <Card className="p-6">
        <Stack spacing={2}>
          <TextField
            type="name"
            name="name"
            label="Nome"
            variant="outlined"
            helperText={state.error}
            error={!!state.error}
          />
          <TextField
            type="email"
            name="email"
            label="E-mail"
            variant="outlined"
            helperText={state.error}
            error={!!state.error}
          />
          <TextField
            type="password"
            name="password"
            label="Senha"
            variant="outlined"
            helperText={state.error}
            error={!!state.error}
          />
          <Button type="submit" variant="contained">
            Registrar
          </Button>
          <Link href="/signin" component={NextLink} className="self-center">
            Já tem uma conta? Faça seu login
          </Link>
        </Stack>
      </Card>
    </form>
  )
}

export default SignUpPage

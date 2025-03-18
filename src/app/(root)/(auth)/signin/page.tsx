'use client'

import NextLink from 'next/link'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Card, Link, Stack, TextField } from '@mui/material'

import loginUser from '@/modules/auth/actions/auth/login-user'
import { LoginUser } from '@/modules/auth/types/auth/login-user'
import { LoginUserSchema } from '@/modules/auth/schemas/auth/login-user-schema'

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(LoginUserSchema)
  })

  const onSubmit = async (data: LoginUser): Promise<void> => {
    try {
      const formData = new FormData()
      formData.append('email', data.email)
      formData.append('password', data.password)
      await loginUser(null, formData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <Card className="p-6">
        <Stack spacing={2}>
          <TextField
            {...register('email')}
            name="email"
            type="email"
            label="E-mail"
            variant="outlined"
            helperText={errors.email?.message}
            error={!!errors.email}
          />
          <TextField
            {...register('password')}
            name="password"
            type="password"
            label="Senha"
            variant="outlined"
            helperText={errors.password?.message}
            error={!!errors.password}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Link href="/signup" component={NextLink} className="self-center">
            Não tem uma conta? Crie uma
          </Link>
        </Stack>
      </Card>
    </form>
  )
}

export default SignInPage

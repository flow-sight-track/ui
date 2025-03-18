'use client'

import NextLink from 'next/link'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Card, Link, Stack, TextField } from '@mui/material'

import createUser from '@/modules/auth/actions/auth/create-user'
import { CreateUser } from '@/modules/auth/types/auth/create-user'
import { CreteUserSchema } from '@/modules/auth/schemas/auth/crete-user-schema'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(CreteUserSchema)
  })

  const onSubmit = async (data: CreateUser): Promise<void> => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('password', data.password)
      await createUser(null, formData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <Card className="p-6">
        <Stack spacing={2}>
          <TextField
            {...register('name')}
            label="Nome"
            variant="outlined"
            helperText={errors.name?.message}
            error={!!errors.name}
          />
          <TextField
            {...register('email')}
            label="E-mail"
            variant="outlined"
            helperText={errors.email?.message}
            error={!!errors.email}
          />
          <TextField
            {...register('password')}
            label="Senha"
            variant="outlined"
            type="password"
            helperText={errors.password?.message}
            error={!!errors.password}
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

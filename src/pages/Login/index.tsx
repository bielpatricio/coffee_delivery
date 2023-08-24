import { Button, Container, Form, Input, Label } from './styles'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

const signInFormSchema = z.object({
  email: z.string().min(3, 'Informe seu nome'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type signInFormInputs = z.infer<typeof signInFormSchema>

export function Login() {
  const { register, handleSubmit } = useForm<signInFormInputs>()

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSignIn(data: signInFormInputs) {
    login({ ...data, name: '', confirm_password: '', age: 0 })
    navigate('/')
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Login</h1>
        <Label>E-mail</Label>
        <Input
          required
          type="text"
          {...register('email')}
          placeholder="E-mail"
        />
        <Label>Senha</Label>
        <Input
          required
          type="password"
          {...register('password')}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  )
}

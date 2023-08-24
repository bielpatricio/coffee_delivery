import { Button, Container, Form, Input, Label } from './styles'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Informe seu nome'),
    email: z.string().email('Informe um e-mail válido'),
    age: z.number().min(18, 'Você deve ter mais de 18 anos'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirm_password: z
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'], // path of error
  })

type signUpFormInputs = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const { register, handleSubmit } = useForm<signUpFormInputs>()

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSignUp(data: signUpFormInputs) {
    login(data)
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Cadastrar</h1>
        <Label>Nome</Label>
        <Input required type="text" {...register('name')} placeholder="Nome" />

        <Label>E-mail</Label>
        <Input
          required
          type="text"
          {...register('email')}
          placeholder="E-mail"
        />

        <Label>Idade</Label>
        <Input type="number" {...register('age')} placeholder="Idade" />

        <Label>Senha</Label>
        <Input
          required
          type="password"
          {...register('password')}
          placeholder="Senha"
        />

        <Label>Confirmar senha</Label>
        <Input
          required
          type="password"
          {...register('confirm_password')}
          placeholder="Confirmar senha"
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}

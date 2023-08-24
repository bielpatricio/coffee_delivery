import { useLocation } from 'react-router-dom'
import { Link, Container } from './styles'

export function HeaderLogin() {
  const path = useLocation().pathname

  return (
    <Container>
      <a href="/login" title="Login">
        <img src="/src/assets/Logo.svg" alt="Logo" draggable={false} />
      </a>
      <a href={path === '/login' ? '/signUp' : '/login'} title="SignUp"></a>
      <Link href={path === '/login' ? '/signUp' : '/login'}>
        {path === '/login' ? 'Cadastrar' : 'Entrar'}
      </Link>
    </Container>
  )
}

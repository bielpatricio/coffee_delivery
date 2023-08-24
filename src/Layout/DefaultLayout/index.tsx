import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { HeaderLogin } from '../../components/HeaderLogin'

export function DefaultLayout() {
  const { isLogged } = useAuth()

  return (
    <LayoutContainer>
      {isLogged ? <Header /> : <HeaderLogin />}
      <Outlet />
    </LayoutContainer>
  )
}

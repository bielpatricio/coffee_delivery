import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { HeaderLogin } from '../../components/HeaderLogin'

export function DefaultLayout() {
  const { isAuthenticated } = useAuth()

  return (
    <LayoutContainer>
      {isAuthenticated ? <Header /> : <HeaderLogin />}
      <Outlet />
    </LayoutContainer>
  )
}

import { Navigate, Route, RouteProps, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { ComponentType, ReactElement, ReactNode } from 'react'

interface ProtectedProps extends RouteProps {
  component: ComponentType<any>
}

export function Protected({
  component: Component,
  ...rest
}: ProtectedProps): ReactElement {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (!isAuthenticated) {
    navigate('/login')
    return <></>
  }

  return <Route {...rest} element={<Component />} />
}

// interface ProtectedProps {
//   children: ReactNode
// }

// export function Protected({ children }: ProtectedProps) {
//   const { isAuthenticated } = useAuth()

//   if (!isAuthenticated) return <Navigate to={{ pathname: '/login' }} />

//   return children
// }

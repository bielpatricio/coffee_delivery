import { Navigate, Route, RouteProps, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { ComponentType, ReactElement, ReactNode } from 'react'

interface PublicProps extends RouteProps {
  component: ComponentType<any>
}

export function Public({
  component: Component,
  ...rest
}: PublicProps): ReactElement {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (!isAuthenticated) {
    navigate('/login')
    return <></>
  }

  return <Route {...rest} element={<Component />} />
}

// interface PublicProps {
//   children: ReactNode
// }

// export function Public({ children }: PublicProps) {
//   const { isAuthenticated } = useAuth()

//   if (isAuthenticated) return <Navigate to={{ pathname: '/' }} />

//   return children
// }

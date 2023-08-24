import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { ReactNode } from 'react'

interface ProtectedProps {
  children: ReactNode
}

export function Protected({ children }: ProtectedProps) {
  const { isLogged } = useAuth()

  if (!isLogged) return <Navigate to={{ pathname: '/login' }} />

  return children
}

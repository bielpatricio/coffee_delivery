import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import { ReactNode } from 'react'

interface PublicProps {
  children: ReactNode
}

export function Public({ children }: PublicProps) {
  const { isLogged } = useAuth()

  if (isLogged) return <Navigate to={{ pathname: '/' }} />

  return children
}

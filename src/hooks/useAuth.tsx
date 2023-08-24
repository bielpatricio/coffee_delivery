import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export interface User {
  name: string
  email: string
  age: number
  password: string
  confirm_password: string
}

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = useMemo(() => !!user, [user])
  console.log('isAuthenticated', isAuthenticated, user)

  const getUser = useCallback(() => {
    setIsLoading(true)
    const user = localStorage.getItem('user')

    if (user) {
      setUser(JSON.parse(user))
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  const login = useCallback((user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('user')
    setUser(null)
  }, [])

  const authContextProviderValue = useMemo(
    () => ({ user, login, logout, isAuthenticated, isLoading }),
    [user, login, logout, isAuthenticated, isLoading],
  )

  return (
    <AuthContext.Provider value={authContextProviderValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}

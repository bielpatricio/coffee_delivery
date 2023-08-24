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
  isLogged: boolean
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const isLogged = useMemo(() => !!user, [user])

  const getUser = useCallback(() => {
    const user = localStorage.getItem('user')

    if (user) {
      setUser(JSON.parse(user))
    }
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
    () => ({ user, login, logout, isLogged }),
    [user, login, logout, isLogged],
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

import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Public } from './components/routes/Public'
import { Protected } from './components/routes/Protected'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { useAuth } from './hooks/useAuth'

export function Router() {
  const { isAuthenticated, isLoading } = useAuth()

  console.log(isAuthenticated, isLoading)

  const routes = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: '/Checkout',
          element: isAuthenticated ? <Checkout /> : <Navigate to="/login" />,
        },
        {
          path: '/Success',
          element: isAuthenticated ? <Success /> : <Navigate to="/login" />,
        },
        {
          path: '/login',
          element: !isAuthenticated ? <Login /> : <Navigate to="/" />,
        },
        {
          path: '/signUp',
          element: !isAuthenticated ? <SignUp /> : <Navigate to="/" />,
        },
      ],
    },
  ]
  const routing = useRoutes(routes)

  if (isLoading) {
    return <div>Loading...</div>
  }

  // return (
  //   <Routes>
  //     <Route
  //       path="/"
  //       element={
  //         <Protected>
  //           <DefaultLayout />
  //         </Protected>
  //       }
  //     >
  //       <Route path="/" element={<Home />} />
  //       <Route path="/Checkout" element={<Checkout />} />
  //       {/* <Route path="/CheckoutFilled" element={<CheckoutFilled />} /> */}
  //       <Route path="/Success" element={<Success />} />
  //     </Route>
  //     <Route
  //       path="/"
  //       element={
  //         <Public>
  //           <DefaultLayout />
  //         </Public>
  //       }
  //     >
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/signUp" element={<SignUp />} />
  //     </Route>
  //   </Routes>
  // )

  return routing
}

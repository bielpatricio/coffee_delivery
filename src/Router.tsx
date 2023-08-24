import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Public } from './components/routes/Public'
import { Protected } from './components/routes/Protected'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <DefaultLayout />
          </Protected>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        {/* <Route path="/CheckoutFilled" element={<CheckoutFilled />} /> */}
        <Route path="/Success" element={<Success />} />
      </Route>
      <Route
        path="/"
        element={
          <Public>
            <DefaultLayout />
          </Public>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

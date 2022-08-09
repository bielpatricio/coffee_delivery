import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { DefaultLayout } from './Layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        {/* <Route path="/CheckoutFilled" element={<CheckoutFilled />} /> */}
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  )
}

import { AddressForm } from './components/AddressForm'
import { Payment } from './components/Payment'
import { SelectedProducts } from './components/SelectedProducts'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <Payment />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <SelectedProducts />
      </div>
    </CheckoutContainer>
  )
}

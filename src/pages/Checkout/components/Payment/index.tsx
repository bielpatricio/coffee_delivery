import { Bank, CreditCard, CurrencyBtc, Money } from 'phosphor-react'
import {
  HeaderForms,
  PaymentField,
  TypePayment,
  TypePaymentContainer,
} from './styles'

export function Payment() {
  function handleButtonSelected() {
    console.log('button selected')
  }
  return (
    <PaymentField>
      <HeaderForms>
        <CurrencyBtc size={22} color="#8047F8" />
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </HeaderForms>
      <TypePaymentContainer>
        <TypePayment
          onClick={handleButtonSelected}
          value="credito"
          type="button"
        >
          <CreditCard size={22} color="#8047F8" />
          <h3>CARTÃO DE CRÉDITO</h3>
        </TypePayment>
        <TypePayment
          onClick={handleButtonSelected}
          value="debito"
          type="button"
        >
          <Bank size={22} color="#8047F8" />
          <h3>CARTÃO DE DÉBITO</h3>
        </TypePayment>
        <TypePayment onClick={handleButtonSelected} value="money" type="button">
          <Money size={22} color="#8047F8" />
          <h3>DINHEIRO</h3>
        </TypePayment>
      </TypePaymentContainer>
    </PaymentField>
  )
}

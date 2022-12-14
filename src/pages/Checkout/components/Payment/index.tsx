import { Bank, CreditCard, CurrencyBtc, Money } from 'phosphor-react'
import { useShoppingCart } from '../../../../hooks/useShoppingCart'
import {
  HeaderForms,
  PaymentField,
  TypePayment,
  TypePaymentContainer,
} from './styles'

export function Payment() {
  const { handleChangePaymentMethod } = useShoppingCart()
  function handleChangePaymentCredit() {
    handleChangePaymentMethod('Cartão de crédito')
  }
  function handleChangePaymentDebit() {
    handleChangePaymentMethod('Cartão de débito')
  }
  function handleChangePaymentMoney() {
    handleChangePaymentMethod('Dinheiro')
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
          onClick={handleChangePaymentCredit}
          value="CARTÃO DE CRÉDITO"
          type="button"
        >
          <CreditCard size={22} color="#8047F8" />
          <h3>CARTÃO DE CRÉDITO</h3>
        </TypePayment>
        <TypePayment
          onClick={handleChangePaymentDebit}
          value="CARTÃO DE DÉBITO"
          type="button"
        >
          <Bank size={22} color="#8047F8" />
          <h3>CARTÃO DE DÉBITO</h3>
        </TypePayment>
        <TypePayment
          onClick={handleChangePaymentMoney}
          value="DINHEIRO"
          type="button"
        >
          <Money size={22} color="#8047F8" />
          <h3>DINHEIRO</h3>
        </TypePayment>
      </TypePaymentContainer>
    </PaymentField>
  )
}

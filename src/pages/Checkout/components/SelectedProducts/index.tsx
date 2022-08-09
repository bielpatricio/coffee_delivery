import { useNavigate } from 'react-router-dom'
import { ProductInMarket } from './components/ProductInMarket'
import { ConfirmOrder, SelectedProductsField, SubTotal, Total } from './styles'

export function SelectedProducts() {
  const navigate = useNavigate()

  function handleButtonSelected() {
    // declare function useHref('/Success');
    navigate('../Success')
  }

  return (
    <SelectedProductsField>
      <ProductInMarket />
      <hr />
      <ProductInMarket />
      <hr />
      <ProductInMarket />
      <hr />

      <SubTotal>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </SubTotal>
      <SubTotal>
        <span>Entrega</span>
        <span>R$ 3,99</span>
      </SubTotal>
      <Total>
        <span>Total</span>
        <span>R$ 35,00</span>
      </Total>
      <ConfirmOrder onClick={handleButtonSelected}>
        <h2>CONFIRMAR PEDIDO</h2>
      </ConfirmOrder>
    </SelectedProductsField>
  )
}

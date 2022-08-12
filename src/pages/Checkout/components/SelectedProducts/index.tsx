import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../../../../hooks/useShoppingCart'
import { ProductInMarket } from './components/ProductInMarket'
import { ConfirmOrder, SelectedProductsField, SubTotal, Total } from './styles'

export function SelectedProducts() {
  const navigate = useNavigate()
  const { items, total, resetAll, paymentMethod, userAddress } =
    useShoppingCart()

  function handleButtonSelected() {
    // declare function useHref('/Success');
    resetAll()
    navigate('../Success')
  }

  // console.log('items: ', items)
  const frete = 3.99
  const totalWithFrete = total + frete
  // console.info('totalWithFrete: ', totalWithFrete)

  return (
    <SelectedProductsField>
      {items.map((item) => (
        <div key={item.id}>
          <ProductInMarket {...item} />
          <hr />
        </div>
      ))}

      <SubTotal>
        <span>Total de itens</span>
        <span>R$ {total.toFixed(2)}</span>
      </SubTotal>
      <SubTotal>
        <span>Entrega</span>
        <span>R$ {frete}</span>
      </SubTotal>
      <Total>
        <span>Total</span>
        <span>R$ {totalWithFrete.toFixed(2)}</span>
      </Total>
      <ConfirmOrder
        onClick={handleButtonSelected}
        disabled={!paymentMethod || !items || !userAddress.cep}
      >
        <h2>CONFIRMAR PEDIDO</h2>
      </ConfirmOrder>
    </SelectedProductsField>
  )
}

import { ChangeEvent, useState } from 'react'
import {
  Button,
  ButtonField,
  ButtonIconMinus,
  ButtonIconPlus,
  ButtonIconRemove,
  CoffeeContainer,
  MiddleColumn,
  QuantInput,
} from './styles'

export function ProductInMarket() {
  const [quantity, setQuantity] = useState(1)

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function SumQuantityProduct() {
    setQuantity((state) => state + 1)
  }

  function SubQuantityProduct() {
    setQuantity((state) => state - 1)
  }

  return (
    <CoffeeContainer>
      <img src="/src/assets/Type=Americano.svg" alt="Coffee" />
      <MiddleColumn>
        <h3>Expresso Tradicional</h3>
        <ButtonField>
          <div>
            <Button onClick={SumQuantityProduct}>
              <ButtonIconPlus size={16} color="#8047F8" weight="bold" />
            </Button>
            <QuantInput
              placeholder="1"
              id="QuantInput"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button onClick={SubQuantityProduct}>
              <ButtonIconMinus size={16} color="#8047F8" weight="bold" />
            </Button>
          </div>
          <div>
            <Button>
              <ButtonIconRemove size={16} color="#8047F8" weight="bold" />
              <h4>REMOVER</h4>
            </Button>
          </div>
        </ButtonField>
      </MiddleColumn>
      <div>
        <span>R$ 9,90</span>
      </div>
    </CoffeeContainer>
  )
}

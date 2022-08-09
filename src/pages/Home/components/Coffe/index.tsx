import { ShoppingCartSimple } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import {
  CoffeeDiv,
  Footer,
  TextDiv,
  TypeDiv,
  ShoppingCartDiv,
  Button,
  ButtonIconPlus,
  QuantInput,
  ButtonIconMinus,
  ButtonField,
} from './styles'

export function Coffee() {
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
    <CoffeeDiv>
      <img src="/src/assets/Type=Americano.svg" alt="Coffee" />
      <TextDiv>
        <TypeDiv>
          <div>
            <strong>TRADICIONAL</strong>
          </div>
          <div>
            <strong>GELATO</strong>
          </div>
          <div>
            <strong>ALCOÓLICO</strong>
          </div>
        </TypeDiv>
        <h2>Expresso Americano</h2>
        <span>Expresso diluído, menos intenso que o tradicional</span>
      </TextDiv>
      <Footer>
        <div>
          <span>R$</span>
          <h2>9,90</h2>
        </div>
        <div>
          <ButtonField>
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
          </ButtonField>
          <ShoppingCartDiv href="/Checkout" title="Carrinho">
            <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
          </ShoppingCartDiv>
        </div>
      </Footer>
    </CoffeeDiv>
  )
}

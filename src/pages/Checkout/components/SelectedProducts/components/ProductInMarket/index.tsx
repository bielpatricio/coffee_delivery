import { ChangeEvent, useState } from 'react'
import { useShoppingCart } from '../../../../../../hooks/useShoppingCart'
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

interface CoffeeProps {
  id: string
  name: string
  amount: number
  description: string
  price: number
  image: string
  tags: string[]
}

export function ProductInMarket({
  id,
  name,
  amount,
  description,
  price,
  image,
  tags,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(amount)

  const imageURL = `/src/assets/Type=${image}.svg`
  const { addItem, subItem, removeItem } = useShoppingCart()

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function SumQuantityProduct() {
    setQuantity((state) => state + 1)
    addItem(id)
  }

  function SubQuantityProduct() {
    if (quantity > 1) {
      subItem(id)
      setQuantity((state) => {
        return state - 1
      })
    } else {
      removeItem(id)
      setQuantity(0)
    }
  }

  function handleRemoveItem() {
    removeItem(id)
  }

  return (
    <CoffeeContainer>
      <img src={imageURL} alt={image} />
      <MiddleColumn>
        <h3>{name}</h3>
        <ButtonField>
          <div>
            <Button onClick={SumQuantityProduct}>
              <ButtonIconPlus size={16} color="#8047F8" weight="bold" />
            </Button>
            <QuantInput
              placeholder="1"
              id="QuantInput"
              value={amount}
              onChange={handleQuantityChange}
            />
            <Button onClick={SubQuantityProduct}>
              <ButtonIconMinus size={16} color="#8047F8" weight="bold" />
            </Button>
          </div>
          <div>
            <Button onClick={handleRemoveItem}>
              <ButtonIconRemove size={16} color="#8047F8" weight="bold" />
              <h4>REMOVER</h4>
            </Button>
          </div>
        </ButtonField>
      </MiddleColumn>
      <div>
        <span>R$ ${price}</span>
      </div>
    </CoffeeContainer>
  )
}

import { ShoppingCartSimple } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useShoppingCart } from '../../../../hooks/useShoppingCart'
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

interface CoffeeProps {
  id: string
  name: string
  amount: number
  description: string
  price: number
  image: string
  tags: string[]
}

export function Coffee({
  id,
  name,
  amount,
  description,
  price,
  image,
  tags,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const imageURL = `/src/assets/Type=${image}.svg`

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function SumQuantityProduct() {
    setQuantity((state) => state + 1)
  }

  function SubQuantityProduct() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const { addNewItem } = useShoppingCart()

  function handleAddItemToCart() {
    const newItem = {
      id,
      name,
      amount: quantity,
      description,
      price,
      image,
      tags,
    }
    addNewItem(newItem)
  }

  return (
    <CoffeeDiv>
      <img src={imageURL} alt={image} draggable={false} />
      <TextDiv>
        <TypeDiv>
          {tags.map((tag) => (
            <div key={tag}>
              <strong>{tag}</strong>
            </div>
          ))}
        </TypeDiv>
        <h2>{name}</h2>
        <span>{description}</span>
      </TextDiv>
      <Footer>
        <div>
          <span>R$</span>
          <h2>{price}</h2>
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
          <ShoppingCartDiv onClick={handleAddItemToCart} title="Carrinho">
            <ShoppingCartSimple size={24} color="#FAFAFA" weight="fill" />
          </ShoppingCartDiv>
        </div>
      </Footer>
    </CoffeeDiv>
  )
}

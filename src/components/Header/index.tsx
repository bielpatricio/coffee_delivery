import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import {
  CartContainer,
  HeaderContainer,
  Button,
  LocationContainer,
  QuantityCart,
  ShoppingCartDiv,
} from './styles'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { items } = useShoppingCart()
  const { logout } = useAuth()

  return (
    <HeaderContainer>
      <a href="/" title="Home">
        <img src="/src/assets/Logo.svg" alt="Logo" draggable={false} />
      </a>
      <div>
        <LocationContainer>
          <MapPin size={24} color="#8047F8" weight="fill" />
          <span>João Pessoa, PB</span>
        </LocationContainer>
        <CartContainer>
          <ShoppingCartDiv href="/Checkout" title="Carrinho">
            <ShoppingCartSimple size={24} color="#C47F17" weight="fill" />
          </ShoppingCartDiv>
          {items.length > 0 && (
            <QuantityCart>
              <span>{items.length}</span>
            </QuantityCart>
          )}
        </CartContainer>
        <Button onClick={() => logout()}>{'Sair'}</Button>
      </div>
    </HeaderContainer>
  )
}

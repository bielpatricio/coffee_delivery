import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { HeaderContainer, LocationContainer, ShoppingCartDiv } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/" title="Home">
        <img src="/src/assets/Logo.svg" alt="Logo" />
      </a>
      <div>
        <LocationContainer>
          <MapPin size={24} color="#8047F8" weight="fill" />
          <span>João Pessoa, PB</span>
        </LocationContainer>
        <ShoppingCartDiv href="/Checkout" title="Carrinho">
          <ShoppingCartSimple size={24} color="#C47F17" weight="fill" />
        </ShoppingCartDiv>
      </div>
    </HeaderContainer>
  )
}

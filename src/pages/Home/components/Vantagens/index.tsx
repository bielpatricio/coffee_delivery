import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { VantagensDiv, Vantagens } from './styles'

export function Vantagem() {
  return (
    <VantagensDiv>
      <Vantagens statusColor="orange">
        <div>
          <ShoppingCartSimple size={16} color="#FAFAFA" weight="fill" />
        </div>
        <span>Compra simples e segura</span>
      </Vantagens>
      <Vantagens statusColor="gray">
        <div>
          <Package size={16} color="#FAFAFA" weight="fill" />
        </div>
        <span>Embalagem mantém o café intacto</span>
      </Vantagens>
      <Vantagens statusColor="yellow">
        <div>
          <Timer size={16} color="#FAFAFA" weight="fill" />
        </div>
        <span>Entrega rápida e rastreada</span>
      </Vantagens>
      <Vantagens statusColor="purple">
        <div>
          <Coffee size={16} color="#FAFAFA" weight="fill" />
        </div>
        <span>O café chega fresquinho até você</span>
      </Vantagens>
    </VantagensDiv>
  )
}

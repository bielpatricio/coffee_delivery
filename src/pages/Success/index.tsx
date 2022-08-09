import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  IconLocation,
  IconMoney,
  IconTimer,
  InfoOrder,
  SuccessContainer,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <div>
        <InfoOrder>
          <div>
            <IconTimer>
              <MapPin size={22} color="#fafafa" weight="fill" />
            </IconTimer>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102.</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </span>
          </div>
          <div>
            <IconLocation>
              <Timer size={22} color="#fafafa" weight="fill" />
            </IconLocation>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </span>
          </div>
          <div>
            <IconMoney>
              <CurrencyDollar size={22} color="#fafafa" />
            </IconMoney>
            <span>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </span>
          </div>
        </InfoOrder>
        <img src="/src/assets/Illustration_Confirmed.svg" alt="success" />
      </div>
    </SuccessContainer>
  )
}

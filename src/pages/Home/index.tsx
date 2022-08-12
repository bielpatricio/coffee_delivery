import { Coffee } from './components/Coffe'
import { MenuCoffee } from './components/Menu/Menu'
import { Vantagem } from './components/Vantagens'
import {
  CoffeeMarket,
  HeaderContainer,
  HomeContainer,
  TextHome,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <TextHome>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <Vantagem />
        </TextHome>
        <img
          src="/src/assets/image_coffee_home.svg"
          alt="coffee"
          draggable={false}
        />
      </HeaderContainer>
      <h2>Nossos cafés</h2>
      <CoffeeMarket>
        {MenuCoffee.map((menu) => {
          return <Coffee key={menu.id} {...menu} />
        }).reverse()}
      </CoffeeMarket>
    </HomeContainer>
  )
}

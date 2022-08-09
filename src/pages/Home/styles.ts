import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 85rem;
  min-width: 60rem;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  > h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-800']};
  }
`

export const HeaderContainer = styled.header`
  /* max-width: 85rem; */
  /* flex: 1; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeMarket = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
`

export const TextHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  gap: 1rem;

  > h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['gray-900']};
  }

  > span {
    font-size: 1.5rem;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-800']};
  }
`

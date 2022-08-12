import styled from 'styled-components'

export const HeaderContainer = styled.header`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 6.5rem; */
  max-width: 85rem;
  min-width: 60rem;
  padding: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const ShoppingCartDiv = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
  border: none;
`

export const LocationContainer = styled.div`
  gap: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  border-radius: 8px;
  border: none;
`

export const QuantityCart = styled.div`
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme['yellow-dark']};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.75rem;
  margin-top: -0.75rem;
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.theme.white};
  }
`

export const CartContainer = styled.div`
  display: flex;
`

import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 85rem;
  min-width: 60rem;
  gap: 1rem;
  > div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
  div > h2 {
    font-family: 'Baloo 2';
    /* font-size: 1.5rem; */
    color: ${(props) => props.theme['gray-800']};
  }
`

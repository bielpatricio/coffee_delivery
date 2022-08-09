import styled from 'styled-components'

export const PaymentField = styled.div`
  /* flex: 1; */
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  width: 40rem;
  height: 15rem;
  border-radius: 8px;
  gap: 2rem;
`

export const HeaderForms = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.2rem;
  }

  div > h3 {
    font-family: 'Roboto';
    font-size: 16px;
    color: ${(props) => props.theme['gray-900']};
    font-weight: 400;
  }

  div > span {
    font-family: 'Roboto';
    font-size: 14px;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const TypePaymentContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1rem;
  /* justify-content: space-between; */
`

export const TypePayment = styled.button`
  padding: 1rem;
  display: flex;
  width: 12rem;
  gap: 0.3rem;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-300']};
  border: none;

  > h3 {
    font-family: 'Roboto';
    font-size: 12px;
    color: ${(props) => props.theme['gray-900']};
    font-weight: 400;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.theme['purple-light']};
    /* border: 1px solid ${(props) => props.theme.purple}; */
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }
`

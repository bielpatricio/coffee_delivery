import styled from 'styled-components'

export const SelectedProductsField = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-200']};
  width: 28rem;
  /* height: 31.5rem; */
  border-radius: 8px;
  gap: 1rem;

  hr {
    width: 100%;
    border: 1px solid ${(props) => props.theme['gray-300']};
  }
`

export const SubTotal = styled.h3`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme['gray-700']};
`

export const Total = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme['gray-800']};
`

export const ConfirmOrder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme.yellow};
  h2 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.white};
  }
  border: none;
  border-radius: 8px;

  &:focus {
    box-shadow: none;
    outline: transparent;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

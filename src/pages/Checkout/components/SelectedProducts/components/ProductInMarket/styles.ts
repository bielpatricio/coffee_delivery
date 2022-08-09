import styled from 'styled-components'
import { Minus, Plus, Trash } from 'phosphor-react'

export const CoffeeContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  img {
    /* padding: 1rem; */
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    align-items: flex-start;
  }

  div > span {
    margin-left: 2rem;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    padding: 0.2rem;
    text-align: center;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h3 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const QuantInput = styled.input`
  background: transparent;
  height: 2rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};
  font-weight: bold;
  font-size: 1, 125rem;
  color: ${(props) => props.theme['gray-900']};
  text-align: center;
  justify-content: center;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.purple};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-900']};
  }

  width: 1.5rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 0.2rem 0.3rem;
  border-radius: 8px;

  &:focus {
    box-shadow: none;
    outline: transparent;
  }

  &:hover {
    cursor: pointer;
  }

  > h4 {
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    padding: 0.2rem;
  }
`
export const ButtonField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > div {
    background-color: ${(props) => props.theme['gray-400']};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-radius: 8px;
  }
`
export const ButtonIconMinus = styled(Minus)`
  background-color: ${(props) => props.theme['gray-400']};
`
export const ButtonIconPlus = styled(Plus)`
  background-color: ${(props) => props.theme['gray-400']};
`
export const ButtonIconRemove = styled(Trash)`
  background-color: ${(props) => props.theme['gray-400']};
`

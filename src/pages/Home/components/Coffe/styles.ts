import { Minus, Plus } from 'phosphor-react'
import styled from 'styled-components'

export const CoffeeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: ${(props) => props.theme['gray-300']};
  width: 18rem;
  height: 20rem;
  border-radius: 6px 35px;
  margin: 1rem 0;
  > img {
    margin-top: -2rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  gap: 1rem;

  > h2 {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    text-align: center;
  }

  > span {
    font-size: 1rem;
    padding: 0 1rem;
    font-family: 'Roboto';
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const TypeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > div {
    border-radius: 16px;
    padding: 0.1rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
  }

  > div > strong {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto';
    font-size: 12px;
  }
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 2rem 1rem 2rem;
  color: ${(props) => props.theme['gray-700']};

  > div > h2 {
    font-size: 1.75rem;
    font-family: 'Baloo 2';
  }

  > div > span {
    font-size: 1rem;
    font-family: 'Roboto';
    margin-top: 0.3rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    justify-content: center;
    /* height: 2rem; */
  }
`
export const ShoppingCartDiv = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
export const ButtonField = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border-radius: 8px;
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
export const ButtonIconMinus = styled(Minus)`
  background-color: ${(props) => props.theme['gray-400']};
`
export const ButtonIconPlus = styled(Plus)`
  background-color: ${(props) => props.theme['gray-400']};
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

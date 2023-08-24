import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  min-width: 60rem;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  padding: 2rem 2rem 4rem 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.purple};
  gap: 0.75rem;

  > h1 {
    color: ${(props) => props.theme.white};
  }
`
export const Input = styled.input`
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme['gray-800']};

  &:focus {
    box-shadow: none;
    border: 2px solid ${(props) => props.theme['gray-800']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-800']};
  }
`
export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.5rem;
`
export const Button = styled.button`
  background-color: ${(props) => props.theme['yellow-dark']};
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.white};
  max-width: 7rem;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.yellow};
    transition: background-color 0.1s;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

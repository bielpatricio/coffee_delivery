import styled from 'styled-components'

export const Container = styled.header`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 85rem;
  min-width: 60rem;
  padding: 2rem;
`
export const Link = styled.a`
  background: transparent;
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.purple};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`

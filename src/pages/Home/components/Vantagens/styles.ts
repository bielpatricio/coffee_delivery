import styled from 'styled-components'

export const VantagensDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0;
`

const STATUS_COLOR = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'gray-700',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Vantagens = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  gap: 0.5rem;
  width: 20rem;

  div {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }

  span {
    font-size: 1rem;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-700']};
  }
`

import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};
  /* width: 100%;
  height: 100%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

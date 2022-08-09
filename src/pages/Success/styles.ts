import styled from 'styled-components'

export const SuccessContainer = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 85rem;
  min-width: 60rem;
  padding: 2rem;

  > h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }

  > h3 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  > div {
    display: flex;
    padding: 2rem 0;
    width: 100%;
    justify-content: space-between;
  }
`

export const InfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.purple};
  align-items: flex-start;
  justify-content: center;
  padding: 2.5rem;
  gap: 2rem;
  width: 33rem;
  height: 17rem;

  border-radius: 6px 36px;

  > div {
    display: flex;
    width: 100%;
    gap: 0.75rem;
    align-items: center;
  }

  > div > span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
  }
`
export const IconBase = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IconMoney = styled(IconBase)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const IconTimer = styled(IconBase)`
  background-color: ${(props) => props.theme.purple};
`
export const IconLocation = styled(IconBase)`
  background-color: ${(props) => props.theme.yellow};
`

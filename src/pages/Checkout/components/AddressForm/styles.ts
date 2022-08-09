import styled from 'styled-components'

export const AddressField = styled.div`
  /* flex: 1; */
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  width: 40rem;
  height: 25rem;
  border-radius: 8px;
  gap: 3rem;
`

export const HeaderForms = styled.header`
  display: flex;
  gap: 0.5rem;

  > div {
    flex: 1;
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

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    display: flex;
    gap: 0.5rem;
  }
`

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['gray-300']};
  height: 3rem;
  border-radius: 12px;
  /* border: 0; */
  border: 1px solid ${(props) => props.theme['gray-400']};
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 1rem;
  color: ${(props) => props.theme['gray-900']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['gray-900']};
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
export const BigInput = styled(BaseInput)`
  width: 100%;
`

export const MediumInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
  width: 22rem;
`

export const CityInput = styled(BaseInput)`
  width: 17.75rem;
`

export const ShortInput = styled(BaseInput)`
  width: 3.75rem;
`

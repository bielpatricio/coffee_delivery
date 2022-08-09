import { MapPinLine } from 'phosphor-react'
import {
  AddressField,
  MediumInput,
  FormContainer,
  HeaderForms,
  ShortInput,
  BigInput,
  ComplementInput,
  CityInput,
} from './styles'

export function AddressForm() {
  return (
    <AddressField>
      <HeaderForms>
        <MapPinLine size={24} color="#C47F17" />
        <div>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </HeaderForms>
      <FormContainer>
        <MediumInput placeholder="CEP" />
        <BigInput placeholder="Rua" />
        <div>
          <MediumInput placeholder="Número" />
          <ComplementInput placeholder="Complemento" />
        </div>
        <div>
          <MediumInput placeholder="Bairro" />
          <CityInput placeholder="Cidade" />
          <ShortInput placeholder="UF" />
        </div>
      </FormContainer>
    </AddressField>
  )
}

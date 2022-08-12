import { MapPinLine } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useShoppingCart } from '../../../../hooks/useShoppingCart'
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

interface Address {
  cep: string
  street: string
  number: string
  complement: string
  city: string
  state: string
  neighborhood: string
}

export function AddressForm() {
  // const [address, setAddress] = useState({
  //   cep: '',
  //   street: '',
  //   number: '',
  //   complement: '',
  //   city: '',
  //   state: '',
  //   neighborhood: '',
  // } as Address)

  const { handleChangeAddress, userAddress } = useShoppingCart()

  // function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
  //   console.log('handleChange', e.target.name)
  //   setAddress((state) => {
  //     return { ...state, [e.target.name]: e.target.value }
  //   })
  // }

  // console.log('Address: ', address)

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
        <MediumInput
          placeholder="CEP"
          name="cep"
          onChange={handleChangeAddress}
          value={userAddress.cep}
        />
        <BigInput
          placeholder="Rua"
          name="street"
          onChange={handleChangeAddress}
          value={userAddress.street}
        />
        <div>
          <MediumInput
            placeholder="Número"
            name="number"
            onChange={handleChangeAddress}
            value={userAddress.number}
          />
          <ComplementInput
            placeholder="Complemento"
            name="complement"
            onChange={handleChangeAddress}
            value={userAddress.complement}
          />
        </div>
        <div>
          <MediumInput
            placeholder="Bairro"
            name="neighborhood"
            onChange={handleChangeAddress}
            value={userAddress.neighborhood}
          />
          <CityInput
            placeholder="Cidade"
            name="city"
            onChange={handleChangeAddress}
            value={userAddress.city}
          />
          <ShortInput
            placeholder="UF"
            name="state"
            onChange={handleChangeAddress}
            value={userAddress.state}
          />
        </div>
      </FormContainer>
    </AddressField>
  )
}

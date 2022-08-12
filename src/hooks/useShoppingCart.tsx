import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addCoffeeAction,
  addNewCoffeeAction,
  removeCoffeeAction,
  resetAllAction,
  subCoffeeAction,
  sumCoffeeAction,
} from '../reducers/Cart/actions'
import { cartReducer, Coffee } from '../reducers/Cart/reducer'

interface Address {
  cep: string
  street: string
  number: string
  complement: string
  city: string
  state: string
  neighborhood: string
}

interface ShoppingCartContextType {
  items: Coffee[]
  total: number
  addNewItem: (item: Coffee) => void
  removeItem: (id: string) => void
  addItem: (id: string) => void
  subItem: (id: string) => void
  userAddress: Address
  handleChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void
  paymentMethod:
    | undefined
    | 'Cartão de crédito'
    | 'Cartão de débito'
    | 'Dinheiro'
  handleChangePaymentMethod: (
    payment: undefined | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
  ) => void
  resetAll: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee_delivery:cart-State-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return { items: [] }
    },
  )

  const [userAddress, setUserAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    neighborhood: '',
  } as Address)

  const [paymentMethod, setPaymentMethod] = useState<
    undefined | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
  >()

  const { items } = cartState
  const total = items.reduce((totalPrice, item) => {
    // console.log('totalPrice', totalPrice)
    // console.log('totalPrice Item:', item)
    return totalPrice + item.amount * item.price
  }, 0)
  // console.log('total: ', total)
  // const totalAsJSON = localStorage.getItem('@coffee_delivery:cart-total-1.0.0')
  // const [total, setTotal] = useState(totalAsJSON ? JSON.parse(totalAsJSON) : 0)

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    // const totalJSON = JSON.stringify(total)
    // localStorage.setItem('@coffee_delivery:cart-total-1.0.0', totalJSON)
    localStorage.setItem('@coffee_delivery:cart-State-1.0.0', stateJSON)
  }, [cartState])

  function addNewItem(item: Coffee) {
    const tryFindCoffeeOnCart = items.find((coff) => coff.id === item.id)
    if (tryFindCoffeeOnCart) {
      dispatch(sumCoffeeAction(item.id, item.amount))
      // console.log(
      //   `${item.amount} qunatidades adicionado no item ${item.name} -> ${item}`,
      // )
    } else {
      dispatch(addNewCoffeeAction(item))
      // console.log('item adicionado no carrinho: ', item)
    }
    // setTotal((state) => state + item.amount * item.price)
  }

  function handleChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    setUserAddress((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  function handleChangePaymentMethod(
    payment: undefined | 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro',
  ) {
    setPaymentMethod(payment)
  }

  function removeItem(id: string) {
    // const item = items.find((coff) => coff.id === id)
    // setTotal((state) => state - item.amount * item.price)
    dispatch(removeCoffeeAction(id))
    console.log('item removido do carrinho: ', id)
  }

  function resetAll() {
    dispatch(resetAllAction())
  }

  function addItem(id: string) {
    // const item = items.find((coff) => coff.id === id)
    // setTotal((state) => state + item.price)
    dispatch(addCoffeeAction(id))
  }

  function subItem(id: string) {
    // const item = items.find((coff) => coff.id === id)
    // setTotal((state) => state - item.price)
    dispatch(subCoffeeAction(id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        subItem,
        addItem,
        removeItem,
        addNewItem,
        total,
        userAddress,
        handleChangeAddress,
        paymentMethod,
        handleChangePaymentMethod,
        resetAll,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)

  return context
}

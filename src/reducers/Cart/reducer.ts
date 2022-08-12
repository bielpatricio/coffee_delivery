import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  amount: number
  description: string
  price: number
  image: string
  tags: string[]
}

interface CartState {
  items: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.RESET_ALL:
      return {
        items: [],
      }

    case ActionTypes.ADD_NEW_COFFEE:
      return {
        ...state,
        items: [...state.items, action.payload.coffee],
      }

    case ActionTypes.REMOVE_COFFEE:
      return {
        ...state,
        items: state.items.filter((coff) => coff.id !== action.payload.id),
      }

    case ActionTypes.SUB_COFFEE:
      return {
        ...state,
        items: state.items.map((coff) => {
          if (coff.id === action.payload.id) {
            return {
              ...coff,
              amount: coff.amount - 1,
            }
          }
          return coff
        }),
      }
    case ActionTypes.ADD_COFFEE:
      return {
        ...state,
        items: state.items.map((coff) => {
          if (coff.id === action.payload.id) {
            return {
              ...coff,
              amount: coff.amount + 1,
            }
          }
          return coff
        }),
      }
    case ActionTypes.SUM_COFFEE:
      return {
        ...state,
        items: state.items.map((coff) => {
          if (coff.id === action.payload.id) {
            return {
              ...coff,
              amount: coff.amount + action.payload.quantity,
            }
          }
          return coff
        }),
      }
    default: {
      return state
    }
  }
}

import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SUB_COFFEE = 'SUB_COFFEE',
  ADD_COFFEE = 'ADD_COFFEE',
  SUM_COFFEE = 'SUM_COFFEE',
  RESET_ALL = 'RESET_ALL',
}

export function resetAllAction() {
  return {
    type: ActionTypes.RESET_ALL,
  }
}
export function addCoffeeAction(id: string) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      id,
    },
  }
}
export function sumCoffeeAction(id: string, quantity: number) {
  return {
    type: ActionTypes.SUM_COFFEE,
    payload: {
      id,
      quantity,
    },
  }
}
export function addNewCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  }
}
export function removeCoffeeAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}
export function subCoffeeAction(id: string) {
  return {
    type: ActionTypes.SUB_COFFEE,
    payload: {
      id,
    },
  }
}

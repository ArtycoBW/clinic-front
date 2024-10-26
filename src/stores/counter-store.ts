import { createStore } from 'zustand'

export interface CounterState {
  count: number
}

export interface CounterActions {
  increment: () => void
  decrement: () => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitialState: CounterState = {
  count: 0,
}

export const createCounterStore = (initState = defaultInitialState) => {
  return createStore<CounterStore>()((set) => {
    return {
      ...initState,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }
  })
}
import { create } from 'zustand'

export interface CounterState {
  isOpen: boolean
}

export interface CounterActions {
  setIsOpen: () => void
}

export type CounterStore = CounterState & CounterActions

export const defaultInitialState: CounterState = {
  isOpen: true,
}

export const useSidebar = create<CounterStore>(setState => {
  return {
    ...defaultInitialState,
    setIsOpen: () => setState(state => ({ isOpen: !state.isOpen })),
  }
})
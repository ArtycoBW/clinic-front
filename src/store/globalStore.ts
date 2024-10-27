import { create } from 'zustand';

interface GlobalState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  setIsSidebarCollapsed: (value: boolean) => void;
  setIsDarkMode: (value: boolean) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  isSidebarCollapsed: false,
  isDarkMode: false,
  setIsSidebarCollapsed: (value: boolean) => set({ isSidebarCollapsed: value }),
  setIsDarkMode: (value: boolean) => set({ isDarkMode: value }),
}));

export default useGlobalStore;

import { create } from 'zustand'

const useCurrentStore = create((set) => ({
    current: {},
    setCurrent: (current: any) => set((state: any) => ({ current: current })),
}));

export default useCurrentStore;
import { create } from 'zustand'

const useActionsStore = create((set) => ({
    actions: [],
    setAction: (action: string) => set((state: any) => ({ actions: [...state.actions, action] })),
}));

export default useActionsStore;
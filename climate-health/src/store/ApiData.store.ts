import { create } from 'zustand'

const useApiDataStore = create((set) => ({
    data: {},
    setData: (data: any) => set((state: any) => ({ data: data })),
}));

export default useApiDataStore;
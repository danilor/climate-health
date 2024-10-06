import { create } from 'zustand'

const useCoordinatesStore = create((set) => ({
    coordinates: {
        lat: 0,
        lng: 0
    },
    setCoordinates: (coordinates: any) => set((state: any) => ({ coordinates: coordinates })),
}));

export default useCoordinatesStore;
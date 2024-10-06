import { create } from 'zustand'
import TimePeriodModel from "../model/TimePeriod.model";

const useTimePeriodStore = create((set) => ({
    timePeriod: {} as TimePeriodModel,
    setTimePeriod: (period: TimePeriodModel) => set((state: any) => ({ timePeriod: period })),
}));


export default useTimePeriodStore;
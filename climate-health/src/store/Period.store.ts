import { create } from 'zustand'
import ForecastDefaultPeriod, {ForecastPeriodModel} from "../model/ForecastPeriod.model";

const usePeriodStore = create((set) => ({
    period: ForecastDefaultPeriod,
    setPeriod: (period: ForecastPeriodModel) => set((state: any) => ({ period: period })),
}));


export default usePeriodStore;
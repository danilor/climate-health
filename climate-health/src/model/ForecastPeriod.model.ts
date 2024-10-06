export type ForecastPeriodModel = {
    interval: string;
    value: number;
}

const ForecastDefaultPeriod = {
    interval: 'months',
    value: 3,
}
export default ForecastDefaultPeriod;
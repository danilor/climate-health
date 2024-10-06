import ForecastChartComponent from "./ForecastChartComponent";
import {useEffect, useState} from "react";
import CropsRecommendationsComponent from "./CropsRecommendationsComponent";
import useCoordinatesStore from "../../store/Coordinates.store";
import useActionsStore from "../../store/Actions.store";
import APIService from "../../services/API.service";
import usePeriodStore from "../../store/Period.store";
import useTimePeriodStore from "../../store/TimePeriod.store";
import ForecastTemperatureChartComponent from "./ForecastTemperatureChartComponent";

export default function ForecastMainComponent() {

    const [activePanel, setActivePanel] = useState<string>('precipitation');

    const coordinates = useCoordinatesStore((state: any) => state.coordinates);

    const actions = useActionsStore((state: any) => state.actions);

    const Period = usePeriodStore((state: any) => state.period);

    const TimePeriod = useTimePeriodStore((state: any) => state.timePeriod);

    const [forecastData, setForecastData] = useState<any>(null);


    const getForecast = () => {
        // console.log('Time period', TimePeriod);
        if (coordinates.lat !== 0 && coordinates.lng !== 0) {
            APIService.getForecast(coordinates.lat, coordinates.lng, 'days', 90, TimePeriod.key).then((response) => {
                console.log('Forecast Response', response.data.forecast);
                setForecastData(response.data.forecast);
            }).catch((error) => {
                console.error('Error reading the forecast');
            });
        }
    };


    useEffect(() => {
        console.log('Ready to get the forecast');
        getForecast();

    }, [actions]);

    if(actions.length === 0){
        return null;
    }
    // console.log('Actions', actions);

    return (
        <>
            <div className="card" style={{width: '100%'}}>
                <div className="card-body">
                    {/*<h5 className="card-title">Forecast</h5>*/}
                    <div className={'chart'}>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={() => {
                                    setActivePanel('precipitation')
                                }} className={'nav-link ' + (activePanel === 'precipitation' ? 'active' : '')} href="#">
                                    Precipitation Forecast
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => {
                                    setActivePanel('temperature')
                                }} className={'nav-link ' + (activePanel === 'temperature' ? 'active' : '')} href="#">
                                    Temperature Forecast
                                </a>
                            </li>
                            <li className={'nav-item'}>
                                <a onClick={() => {
                                    setActivePanel('crops')
                                }} className={'nav-link ' + (activePanel === 'crops' ? 'active' : '')} href="#">
                                    Recommended Crops
                                </a>
                            </li>
                        </ul>
                        <div className={'tab-component'}>
                            {activePanel === 'precipitation' && (<ForecastChartComponent data={forecastData}/>)}
                            {activePanel === 'crops' && (<CropsRecommendationsComponent/>)}
                            {activePanel === 'temperature' && (
                                <ForecastTemperatureChartComponent data={forecastData}/>)}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
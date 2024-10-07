import ForecastChartComponent from "./ForecastChartComponent";
import {useEffect, useState} from "react";
import CropsRecommendationsComponent from "./CropsRecommendationsComponent";
import useCoordinatesStore from "../../store/Coordinates.store";
import useActionsStore from "../../store/Actions.store";
import APIService from "../../services/API.service";
import usePeriodStore from "../../store/Period.store";
import useTimePeriodStore from "../../store/TimePeriod.store";
import ForecastTemperatureChartComponent from "./ForecastTemperatureChartComponent";
import CropModel from "../../model/Crop.model";
import Loading from "../loading/Loading";

export default function ForecastMainComponent() {

    const [activePanel, setActivePanel] = useState<string>('precipitation');

    const coordinates = useCoordinatesStore((state: any) => state.coordinates);

    const actions = useActionsStore((state: any) => state.actions);

    const Period = usePeriodStore((state: any) => state.period);

    const TimePeriod = useTimePeriodStore((state: any) => state.timePeriod);

    const [forecastData, setForecastData] = useState<any>(null);

    const [cropsData, setCropsData] = useState<CropModel[]>([]);

    const [climateDescription, setClimateDescription] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    const getForecast = () => {
        // console.log('Time period', TimePeriod);
        if (coordinates.lat !== 0 && coordinates.lng !== 0) {
            setLoading(true);
            APIService.getForecast(coordinates.lat, coordinates.lng, 'days', 90, TimePeriod.key).then((response) => {
                // console.log('Forecast Response', response.data.forecast);
                setForecastData(response.data.forecast);
                // console.log('Crops data', response.data.ai_suggestions.planting_recommendations);
                if(response.data.ai_suggestions.planting_recommendations !== undefined){
                    // save
                    setCropsData(response.data.ai_suggestions.planting_recommendations);
                    setClimateDescription(response.data.ai_suggestions.climate_summary.general_description);
                }
                setLoading(false);
            }).catch((error) => {
                console.error('Error reading the forecast');
                setLoading(false);
            });
        }
    };


    useEffect(() => {
        // console.log('Ready to get the forecast');
        getForecast();

    }, [actions]);

    if(actions.length === 0){
        return null;
    }
    // console.log('Actions', actions);

    if(loading){
        return (
            <>
                <Loading/>
                <div className="alert alert-warning" role="alert">
                    Please hold on while we gather the necessary information to deliver the most accurate forecast and tailored crop recommendations for you.
                </div>
            </>
        );
    }

    return (
        <>
            <div className="card mb-3" style={{width: '100%'}} id={'forecasting'}>
                <div className="card-body">
                    {/*<h5 className="card-title">Forecast</h5>*/}

                    {(climateDescription !== '' ? (
                        <div className="alert alert-secondary" role="alert">
                            {climateDescription}
                        </div>
                    ) : null)}


                    <div className={'chart'}>
                        <ul className="nav nav-tabs customTabs">
                            <li className="nav-item col-4 text-center">
                                <a onClick={() => {
                                    setActivePanel('precipitation')
                                }} className={'nav-link ' + (activePanel === 'precipitation' ? 'active' : '')}>
                                    Precipitation Forecast
                                </a>
                            </li>
                            <li className="nav-item col-4 text-center">
                                <a onClick={() => {
                                    setActivePanel('temperature')
                                }} className={'nav-link ' + (activePanel === 'temperature' ? 'active' : '')}>
                                    Temperature Forecast
                                </a>
                            </li>
                            <li className='nav-item col-4 text-center'>
                                <a onClick={() => {
                                    setActivePanel('crops')
                                }} className={'nav-link ' + (activePanel === 'crops' ? 'active' : '')}>
                                    Recommended Crops
                                </a>
                            </li>
                        </ul>
                        <div className={'tab-component'}>
                            {activePanel === 'precipitation' && (<ForecastChartComponent data={forecastData}/>)}
                            {activePanel === 'crops' && (<CropsRecommendationsComponent crops={cropsData}/>)}
                            {activePanel === 'temperature' && (
                                <ForecastTemperatureChartComponent data={forecastData}/>)}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
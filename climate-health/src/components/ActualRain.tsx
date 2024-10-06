import useCoordinatesStore from "../store/Coordinates.store";
import {useEffect, useState} from "react";
import APIService from "../services/API.service";
import RainConfig from "../config/RainConfig";
import { FiThermometer } from "react-icons/fi";

export default function ActualRain() {

    const coordinates = useCoordinatesStore((state: any) => state.coordinates);

    const [rain, setRain] = useState<any>(null);
    const [temperature, setTemperature] = useState<number|null>(null);

    useEffect(() => {

        console.log(coordinates);
        APIService.getCurrent(coordinates.lat, coordinates.lng).then((response) => {
            console.log('Coordinates Response');
            console.log(response.data);
            const basePrecipitation = RainConfig.scale.find((scale) => {
                return response.data.precipitation >= scale.min && response.data.precipitation <= scale.max;
            });
            console.log('Base Precipitation', basePrecipitation);
            setRain(basePrecipitation);
            setTemperature(response.data.temperature);
        }).catch((error) => {
            console.error('Error reading the current information');
        });

    }, [coordinates]);

    return (
        <div className="card" style={{width: '100%'}}>

            <div className="card-body">
                <h5 className="card-title">Predictions of the day</h5>
                {(rain !== null && rain !== undefined && temperature !== null ) ? (
                    <div className={'predictionsIcons'}>
                        <h1 className="card-subtitle mb-2 text-muted" title={rain.text}>
                            {rain.icon()}
                        </h1>

                        <h1 className="card-subtitle mb-2 text-muted">
                            <FiThermometer /> {temperature}°
                        </h1>

                    </div>
                ) : null}
            </div>
        </div>
    );
}

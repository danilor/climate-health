import MapComponent from "../components/Map/MapComponent";
import ActualRain from "../components/ActualRain";
import {useEffect} from "react";
import useCoordinatesStore from "../store/Coordinates.store";
import HeroImage from "../components/generic/HeroImage";
import useActionsStore from "../store/Actions.store";
import StringUtilities from "../String.utilities";
import ForecastChartComponent from "../components/forecasts/ForecastChartComponent";
import ForecastMainComponent from "../components/forecasts/ForecastMainComponent";
import FooterHeroImage from "../components/generic/FooterHeroImage";

export default function Main() {

    const coordinates = useCoordinatesStore((state: any) => state.coordinates);
    const setAction = useActionsStore((state: any) => state.setAction);

    useEffect(() => {
        // LoadingService.show();
    }, []);

    // console.log('Coordinates', coordinates);

    const executeAction = (action: string) => {
        // console.log('Action to be executed', action, coordinates);
        switch (action) {
            case 'get':
                // console.log('Get action');
                setAction(`Get Coordinates [${StringUtilities.randomId(10)}]`);
                document.getElementById('nextForecast')?.scrollIntoView({behavior: 'smooth'});
                break;
        }
    }

    return (
        <>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <HeroImage/>
                    </div>
                    <div className={'col-12 col-lg-9 d-flex align-items-stretch'}>
                        <MapComponent actionEmitter={(action: string) => {
                            executeAction(action)
                        }}/>
                    </div>
                    <div className={'col-12 col-lg-3 d-flex align-items-stretch mt-3 mt-lg-0'}>
                        <ActualRain/>
                    </div>
                </div>
                <div className="row">
                    <div className={'col-12 mt-3'}>
                        <ForecastMainComponent/>
                    </div>
                </div>


                <div className="row">
                    <div className={'col-12'}>
                        <FooterHeroImage/>
                    </div>
                </div>
            </div>
        </>

    );
}
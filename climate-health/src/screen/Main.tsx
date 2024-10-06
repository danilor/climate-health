import MapComponent from "../components/MapComponent";
import HeaderNav from "../components/HeaderNav";
import ActualRain from "../components/ActualRain";
import FooterComponent from "../components/FooterComponent";
import {useEffect} from "react";
import LoadingService from "../services/Loading.service";
import useCoordinatesStore from "../store/Coordinates.store";
import HeroImage from "../components/HeroImage";

export default function Main(){

    const coordinates =  useCoordinatesStore( (state: any) => state.coordinates);

    useEffect(()=>{
        // LoadingService.show();
    },[]);

    console.log('Coordinates', coordinates);

    return (

<>
    <div className={'container'}>
        <div className={'row'}>
            <div className={'col-12'}>
               <HeroImage/>
            </div>
            <div className={'col-12 col-lg-9 d-flex align-items-stretch'}>
                <MapComponent actionEmitter={(action: string) => {
                }}/>
            </div>
            <div className={'col-12 col-lg-3 d-flex align-items-stretch mt-3 mt-lg-0'}>
                <ActualRain/>
            </div>
        </div>
    </div>
</>

    );
}
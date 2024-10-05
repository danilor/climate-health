import MapComponent from "../components/MapComponent";
import HeaderNav from "../components/HeaderNav";
import ActualRain from "../components/ActualRain";
import FooterComponent from "../components/FooterComponent";
import {useEffect} from "react";
import LoadingService from "../services/Loading.service";

export default function Main(){

    useEffect(()=>{
        // LoadingService.show();
    },[]);

    return (

<>
    <div className={'container'}>
        <div className={'row'}>
            <div className={'col-12 col-lg-9 d-flex align-items-stretch'}>
                <MapComponent actionEmitter={(action: string)=>{}}/>
            </div>
            <div className={'col-12 col-lg-3 d-flex align-items-stretch mt-3 mt-lg-0'}>
                <ActualRain />
            </div>
        </div>
    </div>
    </>

    );
}
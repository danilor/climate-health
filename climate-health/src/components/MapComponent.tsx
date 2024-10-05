import React, {useEffect} from 'react';

import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';
import MapsAPI from "../config/MapsAPI";

import markerImage from './../img/NASAPIN.png';
import MapControlPanel from "./MapControlPanel";

type MapComponentProps = {
    width?: string;
    height?: string;
    locationChange?: Function;
    actionEmitter: Function;
}

export default function MapComponent({
                                         width = '100%', height = '500px',
                                         locationChange = () => {
                                         },
                                         actionEmitter = () => {
                                         }
                                     }: MapComponentProps) {


    const [lat, setLat] = React.useState(MapsAPI.defaultLat);
    const [lng, setLng] = React.useState(MapsAPI.defaultLng);

    const [mapLat, setMapLat] = React.useState(MapsAPI.defaultLat);
    const [mapLng, setMapLng] = React.useState(MapsAPI.defaultLng);

    const [loaded, setLoaded] = React.useState(false);

    const markerDragged = (e: google.maps.MapMouseEvent) => {
        setLat(e.latLng!.lat());
        setLng(e.latLng!.lng());
        console.log('Marker dragged to:', e.latLng!.lat(), e.latLng!.lng());
        locationChange({
            lat: e.latLng!.lat(),
            lng: e.latLng!.lng()
        });
    }

    const getCurrentLocation = () => {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
            location.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                setMapLat(position.coords.latitude);
                setMapLng(position.coords.longitude);
                setLoaded(true);
                locationChange({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, (error) => {
                // this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
                setLoaded(true);
            })
        } else {
            setLoaded(true);
        }

    }

    useEffect(() => {
        getCurrentLocation();
    }, []);


    if (!loaded) {
        return (<></>);
    }

    return (
        <div className={'mapSpace'}>
            <APIProvider apiKey={MapsAPI.key}>
                <Map
                    mapId={MapsAPI.defaultMapID}
                    style={{width: width, height: height}}
                    defaultCenter={{lat: mapLat, lng: mapLng}}
                    defaultZoom={MapsAPI.defaultZoom}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >

                    <AdvancedMarker
                        position={{lat: lat, lng: lng}}
                        draggable={true}
                        onDragEnd={markerDragged}
                    >
                        <img src={markerImage} width={MapsAPI.pinSize} height={MapsAPI.pinSize}/>
                    </AdvancedMarker>
                </Map>
                <MapControlPanel actionEmitter={(action: string)=>{actionEmitter(action)}} lat={lat} lng={lng}/>
            </APIProvider>
        </div>
    );
}